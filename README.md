DS Flow
=======

DS Flow is a training project which allows analyzing of the datasets through vue.js spa application.

## Example of the dataset analysis

![Alt Text](https://github.com/m4qo5/flow/blob/master/report.gif)


## Development

Install [Docker](https://docs.docker.com/install/) and [Docker-Compose](https://docs.docker.com/compose/). Start your virtual machines with the following shell command:

`docker-compose up --build`

If all works well, you should be able to create an admin account with:

`docker-compose run backend python manage.py createsuperuser`
