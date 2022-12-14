const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const cucumber = require('cypress-cucumber-preprocessor').default

//For connecting to SQL Server
const mysql = require('mysql')
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db)
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}

module.exports = defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1920,
  viewportHeight: 1080,

  // Connect with freesqldatabase website to test a database integration with cypress
  projectId: "qx4b9b",
  env: {
    db: {
      host: "sql7.freesqldatabase.com",
      user: "sql7586871",
      password: "BxHutxGnhW",
      database: "sql7586871"
    }
  },


  e2e: {
    specPattern: "cypress/e2e/**/*.{feature,js,jsx,ts,tsx}",
    excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples/*"],

    defaultCommandTimeout: 4000,
    watchForFileChanges: false,

    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: "cypress/report/mochawesome-reports"
    },

    //Cypress Studio is an app (feature) that allows you to record tests on browser
    experimentalStudio: true,


    setupNodeEvents(on, config) {
      on('task', { downloadFile });
      on('file:preprocessor', cucumber());

      //For running sql query
      on('task', {
        queryDb: query => {
          return queryTestDb(query, config)
        },

      });

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
})
