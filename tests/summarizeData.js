const { Given, Then, When } = require('@cucumber/cucumber');

let sampledb;
Given(/^I am on the samplea database page$/, async () => {
    sampledb = browser.page.sampledb();
    await sampledb.navigate();
});

When(/^I click on orders$/, async () => {
    await 
    sampledb
    .waitForElementVisible('@orders')
    .click('@orders');
});

Then(/^I click on Summarize$/, async () => {
    await sampledb
    .waitForElementVisible('@summarize')
    .click('@summarize')
    .pause(2000);
});
Then(/^I click on done with count filter$/, async () => {
    await sampledb
    .waitForElementVisible('@done')
    .click('@done')
    .pause(2000);
});