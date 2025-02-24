const { defineConfig } = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);

      on('after:run', (results) => {
        if (results) {
          const data = `Environment=${config.baseUrl}\nBrowser=${results.browserName}\nBrowserVersion=${results.browserVersion}`;
          require('fs').writeFileSync('allure-results/environment.properties', data);
        }
      });

      return config;
    },
    baseUrl: "https://dev-01-alb-www-gsr.woc.noaa.gov",
    specPattern: "tests/app/**/*.feature",
    supportFile: "tests/app/support/e2e.js",
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    video: false,
    env: {
      allureReuseAfterSpec: true
    }
  },
});
