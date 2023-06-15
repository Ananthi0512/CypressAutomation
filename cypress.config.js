const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({
  defaultCommandTimeout:7000,
  env:{
    url: 'https://rahulshettyacademy.com/',
    
  },
  retries:{
    runMode:1,
  },
  projectId: "abxr9d",
  e2e: {
    setupNodeEvents,
    specPattern:'cypress/e2e/web_ui_examples/*.js',
    //specPattern:'cypress/e2e/web_ui_examples/BDD/*.feature',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots'
  },
});


//json file -> html


