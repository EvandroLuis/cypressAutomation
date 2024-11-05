const { defineConfig } = require("cypress");

const path = require('path')
module.exports = defineConfig({
  chromeWebSecurity: false,
  includeShadowDom: true,
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },table(message) {
          console.table(message);
    
          return null;
        }
        
      })
    },
  },
  
});