const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  execTimeout: 60000,
  retries: 0,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
    },
    baseUrl: 'https://www.cp.pt/',
    specPattern: 'cypress/e2e/**/*.*'
  }
})
