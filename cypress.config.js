const { defineConfig } = require('cypress')

module.exports = defineConfig({
  eyesIsDisabled: false,
  chromeWebSecurity: false,
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  appliConfFile: {
    batch: {
      id: '54d114ce-898b-4329-9cf9-a9b901a866ee',
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 54805,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.spec.js')(on, config)
    },
  },
})


require('@applitools/eyes-cypress')(module);
