FROM apache/airflow:slim-latest-python3.8 as airflow_main

USER airflow

COPY entrypoint.sh /entrypoint.sh 
COPY airflow.cfg /opt/airflow/airflow.cfg
COPY webserver_config.py /opt/airflow/webserver_config.py

USER root
RUN chmod 755 /entrypoint.sh
RUN chmod +x /entrypoint.sh

USER airflow
WORKDIR /opt/airflow/

RUN pip install pandas
RUN pip install geopandas
RUN pip install jupyter
RUN pip install keplergl


ENTRYPOINT ["/entrypoint.sh"]
