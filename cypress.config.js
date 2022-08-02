const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    'video': false,
    'pageLoadTimeout': 100000
  },
})
