FROM cypress/base:16.17.1

RUN mkdir -p /app/app
RUN mkdir -p /app/reports/videos
RUN mkdir -p /app/reports/screenshots

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY ./cypress /app/cypress
COPY ./example-tests /app/example-tests
COPY ./cypress.config.js /app

RUN $(npm bin)/cypress verify

ENTRYPOINT ["npx", "cypress", "run"]
