# Mobomo Cypress Test Framework

## Set up your project

* Create a `/tests` folder in the root of your project
* Copy the core config, reports, and application tests folder from the image to your project:
    * `docker create -name cypress-temp mobomo/cypress:latest`
    * `docker cp cypress-temp:/app/cypress.config.js ./tests`
    * `docker cp cypress-temp:/app/app-tests ./tests/app`
    * `docker cp cypress-temp:/app/reports ./tests/reports`
    * `docker rm cypress-temp`
* Edit the `/tests/cypress.config.js` to set your base url appropriately.
* Write your tests in the `/tests/app/` folder, using the examples provided to extend the base gherkin configurations.

## Running your tests

To run your tests on a remote server (dev, stage, etc...) use the following docker run command to run the tests:
* `docker run --rm -v "${PWD}/tests/cypress.config.js:/app/cypress.config.js" -v "${PWD}/tests/app:/app/app-tests" -v "${PWD}/tests/reports:/app/reports" mobomo/cypress:latest`

In order to run tests on a local development environment, you will need to run the image within a docker based localdev environment:
* You will need to determine the network name from the docker compose file and/or `docker network ls` command.
* You will need to get the web server service name from the docker compose file and/or `docker-compose ps` command.
* Edit the `/tests/cypress.config.js` file to use the webserver service name as the hostname for the base url.
* Use `docker run` command with the `--network` switch to run it attached to the localdev virtual network:
    * `docker run --rm --network <NETWORK_NAME> -v "${PWD}/tests/cypress.config.js:/app/cypress.config.js" -v "${PWD}/tests/app:/app/app-tests" -v "${PWD}/tests/reports:/app/reports" mobomo/cypress:latest`
