const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 10000,
  defaultCommandTimeout: 10000,

  e2e: {
    baseUrl: "https://demo.frontify.com/d/FkBpT1nT1tqo/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  experimentalStudio: true,
  "viewportWidth": 1920,     // Set the default viewport width
  "viewportHeight": 1080,
});
