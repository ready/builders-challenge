#!/bin/bash

airflow db init
airflow scheduler & 
airflow users create --role Admin --username admin --firstname admin --lastname admin --email admin --password builders123 

airflow webserver
