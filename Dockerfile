FROM cypress/base:16.17.1

RUN mkdir /app
RUN mkdir -p /app/reports/videos
RUN mkdir -p /app/reports/screenshots

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY ./cypress /app/cypress
COPY ./app-tests /app/app-tests
COPY ./cypress.config.js /app

RUN $(npm bin)/cypress verify

ENTRYPOINT ["npx", "cypress", "run"]
