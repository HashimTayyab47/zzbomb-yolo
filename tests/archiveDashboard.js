const { Given, Then, When } = require('@cucumber/cucumber');

Given(/^I am on the dashboard page$/, async () => {
    await browser.url('http://localhost:3000/collection/root');
});

When(/^I click on 3 dots on the dashboard$/, async () => {
    await browser
    .click('#root > div > div > main > div > div > div.css-d7wsyz.e1lvwkfs1 > div.relative > table > tbody > tr:nth-child(1) > td:nth-child(5) > div > div > div > button')
});

Then(/^I click on archive dashboard button$/, async () => {
    await browser
    .click('svg[aria-label="archive icon"]').pause(2000);
});