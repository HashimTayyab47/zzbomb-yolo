const chromedriver = require("chromedriver");

module.exports = {
  test_runner: {
    type: 'cucumber',
    options: {
      feature_path: '*/*.feature',
    }
    },
  src_folders: ["tests"], //tests is a folder in workspace that has the step definitions
  page_objects_path: 'pageObjects',
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ["--port=4444"],
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ['--user-data-dir=C:\\Users\\DEll\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 10',
          '--remote-debugging-port=9222']
        }
      },
    },
  },
};
