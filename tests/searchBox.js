const { Given, Then, When } = require('@cucumber/cucumber');

let home;

Given(/^I am on dashboard$/, async () => {
    home = browser.page.home();
    home.navigate();
});

When(/^I click on search box$/, async () => {
    await home
    .waitForElementVisible('@searchBar')
    .click('@searchBar');
});

Then(/^I search for analytics event$/, async () => {
    await home
    .setValue('@searchBar', 'Analytic Events')
    .pause(2000);
});

Then(/^I click on analytics event$/, async ()=> {
    await home
    .waitForElementVisible('@dropdown')
    .click('@dropdown')
    .pause(5000);
});