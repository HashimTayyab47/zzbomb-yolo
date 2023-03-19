const { Given, Then, When } = require('@cucumber/cucumber');

let account;
Given(/^I am on account list$/, async () => {
    account = browser.page.account()
    await account.navigate();
});

When(/^I click on account filters$/, async () => {
    await account
    .waitForElementVisible('@filterBtn')
    .click('@filterBtn');
});

Then(/^I can select Business and Premium$/, async () => {
    await account
    .click('@businessBtn')
    .pause(2000);
    await account
    .click('@premiumBtn')
    .pause(2000);
});

Then(/^I click on apply filter$/, ()=> {
    return account
    .click('@apply')
    .pause(5000);
});