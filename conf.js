var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: "chrome",
  chromeOptions: {
            args: [ "--headless", "--window-size=1024,768" ]
        }},
  specs: ['test.js'],
  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'Reports/screenshots'
        }).getJasmine2Reporter());
     }

};
