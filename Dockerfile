FROM cypress/base:16.17.1

ENV ELECTRON_EXTRA_LAUNCH_ARGS=--disable-gpu

WORKDIR /app

RUN mkdir -p /app/app && \
    mkdir -p /app/reports/videos && \
    mkdir -p /app/reports/screenshots

COPY ./package.json /app
COPY ./cypress /app/cypress
COPY ./example-tests /app/example-tests
COPY ./cypress.config.js /app
COPY ./.cypress-cucumber-preprocessorrc.json /app

RUN npm install && \
    $(npm bin)/cypress verify

ENTRYPOINT ["npx", "cypress", "run"]
