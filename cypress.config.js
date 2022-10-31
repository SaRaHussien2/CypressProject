const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
    // These settings apply everywhere unless overridden
    defaultCommandTimeout: 5000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    projectId: "qx4b9b",

  e2e: {
     specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
     excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples/*"],

     reporter: "mochawesome",
     reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: "cypress/report/mochawesome-report"
      },

      //Cypress Studio is an app (feature) that allows you to record tests on browser
      experimentalStudio: true,

 
     setupNodeEvents(on, config) {
      on('task', {downloadFile});

      // on("before:browser:launch", (browser = {}, launchOptions) => {
        
      //   if (browser.family === "chromium" && browser.name !== "electron") {
      //     launchOptions.args.push("--start-fullscreen");
      //     launchOptions.preferences.default.intl = { accept_languages: "en" };

      //     return launchOptions;
      //   }

      //   if (browser.name === "electron") {
      //     launchOptions.preferences.fullscreen = true;

      //     return launchOptions;
      //   }
      // });
    },
  },
});
