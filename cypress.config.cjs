const { defineConfig } = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = {
  e2e: {
    baseUrl:"https://www.gulfspillrestoration.noaa.gov/",
    specPattern: "tests/app/**/*.feature",
    supportFile: false,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
        //plugins: [createEsbuildPlugin(config)],
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      return config;
    },
    video: true,
    baseUrl:"https://www.gulfspillrestoration.noaa.gov/"
  },
};