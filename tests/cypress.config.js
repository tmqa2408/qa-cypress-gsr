import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import preprocessor from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild.js";

export async function setupNodeEvents(on, config) {
    // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin.default(config)],
        })
    );

    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
}

export default defineConfig({
    e2e: {
        baseUrl: "https://dev-01-alb-www-gsr.woc.noaa.gov",
        specPattern: [
            "cypress/**/*.feature",
            "app/**/*.feature"
        ],
        excludeSpecPattern: [
            "example-tests/**/*.feature"
        ],
        supportFile: false,
        setupNodeEvents,
        screenshotsFolder: "reports/screenshots",
        videosFolder: "reports/videos",
        video: false,
        viewportWidth: 1920,
        viewportHeight: 1080,
        reporter: "junit",
        reporterOptions: {
            mochaFile: "reports/test-output-[hash].xml"
        }
    },
});
