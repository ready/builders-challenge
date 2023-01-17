# airflow imports
from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from datetime import datetime, date

# operator imports
import os
import shutil
import pandas as pd
import geopandas as gpd
import numpy as np
from io import BytesIO
import requests
import zipfile
import gzip
from keplergl import KeplerGl

# Airflow operators

# stage_inputs: get inputs from Google Drive and stage them in the volume.
# These urls are hard-coded for the challenge but can be changed to the Google Drive API for new incoming files.
def stage_inputs(**kwargs):

    # create staging directory
    if not os.path.exists("/opt/airflow/staging"):
        os.makedirs("/opt/airflow/staging")
    
    # get ms_hinds_location
    ms_hinds_location_url='https://drive.google.com/uc?id=1WOmj8wSpe8FDn_7opryh9tsng8ZqhAr1'
    location_df = pd.read_csv(ms_hinds_location_url)

    # only keep columns starting with f_
    f_location = location_df[['f_ziploc', 'f_lat', 'f_lon', 'f_city', 'f_addr1', 'f_unit']]
    f_location.to_csv('/opt/airflow/staging/f_location.csv', index=False,)

    # get ms_hinds_buildings zip file as byte stream and stage in volume
    ms_hinds_buildings_url='https://drive.google.com/uc?id=1qO86txHm82OqWbEEIEsaevF_tRFv4PhK'
    r = requests.get(ms_hinds_buildings_url)
    z = zipfile.ZipFile(BytesIO(r.content))
    z.extractall("/opt/airflow/staging/")


def data_cleaning(**kwargs):

    # create buildings dimension from ms_hinds_buildings.json
    buildings_df = gpd.read_file("/opt/airflow/staging/ms_hinds_buildings.json")
    d_buildings = buildings_df[['ed_bld_uuid', 'ed_lat','ed_lon', 'geometry']]
   
    # get f_location
    f_location = pd.read_csv('/opt/airflow/staging/f_location.csv')

    # drop locations without coordinates
    f_location = f_location.dropna(subset=['f_lat','f_lon'])

    # filter f_location and keep values only within d_buildings
    ed_lat_max = d_buildings.ed_lat.max()
    ed_lat_min = d_buildings.ed_lat.min()
    ed_lon_max = d_buildings.ed_lon.max()
    ed_lon_min = d_buildings.ed_lon.min()
    f_location = f_location[(f_location['f_lat'] >= ed_lat_min) & (f_location['f_lat'] <= ed_lat_max)]
    f_location = f_location[(f_location['f_lon'] >= ed_lon_min) & (f_location['f_lon'] <= ed_lon_max)]
    
    # stage cleaned dataframes
    f_location.to_csv('/opt/airflow/staging/f_location.csv', index=False)
    d_buildings.to_file('/opt/airflow/staging/d_buildings.json')  

def get_closest_building(**kwargs):

    # function that returns the closest building coordinates. Filter d_buildings by tolerance to reduce df scan time.
    def return_closest_building(lat,lon,tolerance):
        d_buildings_small = d_buildings[(d_buildings['ed_lat'] >= lat - tolerance) & (d_buildings['ed_lat'] <= lat + tolerance)]
        d_buildings_small = d_buildings_small[(d_buildings['ed_lon'] >= lon - tolerance) & (d_buildings['ed_lon'] <= lon + tolerance)]
        
        # increase tolerance if no buildings are found.
        while d_buildings_small.empty:
            tolerance *= 2
            d_buildings_small = d_buildings[(d_buildings['ed_lat'] >= lat - tolerance) & (d_buildings['ed_lat'] <= lat + tolerance)]
            d_buildings_small = d_buildings_small[(d_buildings['ed_lon'] >= lon - tolerance) & (d_buildings['ed_lon'] <= lon + tolerance)]

        d_buildings_small['lat_diff']=d_buildings_small['ed_lat'].apply(lambda x: abs(x - lat))
        d_buildings_small['lon_diff']=d_buildings_small['ed_lon'].apply(lambda x: abs(x - lon))
        d_buildings_small['net_distance']= np.sqrt(np.power(d_buildings_small['lat_diff'],2.)+np.power(d_buildings_small['lon_diff'],2.))
        closest_building = d_buildings_small.sort_values(by=['net_distance'], ascending=[True]).iloc[0,:]
        return (closest_building.ed_lat,closest_building.ed_lon, closest_building.net_distance)

    # get closest building coordinates for each location
    f_location = pd.read_csv('/opt/airflow/staging/f_location.csv')
    d_buildings = gpd.read_file("/opt/airflow/staging/d_buildings.json")
    f_location['closest_coord'] = f_location.apply(lambda x: return_closest_building(x.f_lat, x.f_lon,0.001), axis=1)

    # expand closest_coord to c_lat, c_lon, and drop closest_coord
    f_location[['c_lat', 'c_lon', 'net_distance']] = pd.DataFrame(f_location['closest_coord'].tolist(), index=f_location.index)
    del f_location['closest_coord']

    # stage updated f_location
    f_location.to_csv('/opt/airflow/staging/f_location.csv', index=False)


def return_output_1(**kwargs):
    # create outputs directory
    if not os.path.exists("/opt/airflow/outputs"):
        os.makedirs("/opt/airflow/outputs")

    # read f_location
    f_location = pd.read_csv('/opt/airflow/staging/f_location.csv')
    d_buildings = gpd.read_file("/opt/airflow/staging/d_buildings.json")

    # output 1 - data table: with improved geo-precision of address locations
    output_1 = f_location.copy()
    output_1['f_lat'] = output_1['c_lat'].combine_first(output_1['f_lat'])
    output_1['f_lon'] = output_1['c_lon'].combine_first(output_1['f_lon'])
    del output_1['c_lat']
    del output_1['c_lon']

    # save output
    date_str = str(date.today())
    output_1.to_csv(f'/opt/airflow/outputs/{date_str}_output_1.csv', index=False)


def return_output_2(**kwargs):
    # output 2 - visualization: address locations BEFORE vs AFTER on top of building polygons
    map_1 = KeplerGl()

    # read tables
    f_location = pd.read_csv('/opt/airflow/staging/f_location.csv')
    d_buildings = gpd.read_file("/opt/airflow/staging/d_buildings.json")

    # add building polygons
    map_1.add_data(data=d_buildings[['geometry']], name='buildings')

    # add locations before adjustment
    map_1.add_data(data=f_location[['f_lat', 'f_lon']], name='locations_pre')

    # add locations after adjustment
    map_1.add_data(data=f_location[['c_lat', 'c_lon']], name='locations_post')

    # center map 
    config = {
        'version': 'v1',
        'config': {
            'mapState': {
                'latitude': 32.3,
                'longitude': -90.15,
                'zoom': 12
            }
        }
    }
    map_1.config = config

    # save output
    date_str = str(date.today())
    map_1.save_to_html(file_name=f'/opt/airflow/outputs/{date_str}_output_2.html')

def return_output_3(**kwargs):
    # output 3 - report: the builder needs to describe the final measure of success 
    
    # read tables
    f_location = pd.read_csv('/opt/airflow/staging/f_location.csv')
    ms_hinds_location_url='https://drive.google.com/uc?id=1WOmj8wSpe8FDn_7opryh9tsng8ZqhAr1'
    location_df = pd.read_csv(ms_hinds_location_url)


    # find average net distance
    avg_net_distance = f_location['net_distance'].mean()

    # find number of points unmoved
    total_rows = location_df.shape[0]
    moved_rows = f_location.shape[0]
    unmoved_rows = total_rows - moved_rows

    # create report
    report_df = pd.DataFrame(columns=['Attribute','Value'])
    report_df.loc[0] = ['average moved distance', f"{avg_net_distance} degrees"]  
    report_df.loc[1] = ['unmoved points', f"{unmoved_rows} points"]  
    report_df.loc[3] = ['additional data for validation', 'Any data that shows address-lat-lon relationship.'] 

    # save output
    date_str = str(date.today())
    report_df.to_csv(f'/opt/airflow/outputs/{date_str}_output_3.csv', index=False)




def clear_staging(**kwargs):
    # remove staging directory
    shutil.rmtree('/opt/airflow/staging')
   

# dag definition
dag = DAG(
    dag_id='auto-etl',
    schedule_interval='0 0 * * *',
    start_date=datetime(2023, 1, 1),
    catchup=False,
    is_paused_upon_creation=False
)

stage_inputs = PythonOperator(
    task_id='stage_inputs',
    python_callable=stage_inputs,
    provide_context=True,
    dag=dag
)

data_cleaning = PythonOperator(
    task_id='data_cleaning',
    python_callable=data_cleaning,
    provide_context=True,
    dag=dag
)

get_closest_building = PythonOperator(
    task_id='get_closest_building',
    python_callable=get_closest_building,
    provide_context=True,
    dag=dag
)

return_output_1 = PythonOperator(
    task_id='return_output_1',
    python_callable=return_output_1,
    provide_context=True,
    dag=dag
)

return_output_2 = PythonOperator(
    task_id='return_output_2',
    python_callable=return_output_2,
    provide_context=True,
    dag=dag
)

return_output_3 = PythonOperator(
    task_id='return_output_3',
    python_callable=return_output_3,
    provide_context=True,
    dag=dag
)

clear_staging = PythonOperator(
    task_id='clear_staging',
    python_callable=clear_staging,
    provide_context=True,
    dag=dag
)

stage_inputs >> data_cleaning >> get_closest_building >> [return_output_1, return_output_2, return_output_3] >> clear_staging