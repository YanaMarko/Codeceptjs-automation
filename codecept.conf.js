exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      channel: 'chrome', 
      url: 'http://localhost',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy', // <-- Меняем имя модуля здесь!
      outputDir: './output/allure-results'
    }
  }
}
