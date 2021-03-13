DS Flow
=======

DS Flow is a training project which allows analyzing of the datasets through vue.js spa application.
The main goal was to learn vue.js framework through development process. 
Do not take this code seriously unless you know what you're doing.
It uses great [pandas-profiling](https://github.com/pandas-profiling/pandas-profiling) library for the dataset analysis.

## Example of the dataset analysis

![Alt Text](https://github.com/m4qo5/flow/blob/master/report.gif)


## Development

Install [Docker](https://docs.docker.com/install/) and [Docker-Compose](https://docs.docker.com/compose/). Start your virtual machines with the following shell command:

`docker-compose up --build`

If all works well, you should be able to create an admin account with:

`docker-compose run backend python manage.py createsuperuser`
