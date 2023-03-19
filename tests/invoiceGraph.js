const { Given, Then, When } = require('@cucumber/cucumber');

let invoice;
Given(/^I am on the invoice page$/, async () => {
    invoice = browser.page.invoice();
    await invoice.navigate();
});

When(/^I click on visualization$/, async () => {
    await invoice
    .waitForElementVisible('@visualization')
    .click('@visualization')
});

Then(/^I select line graph$/, async () => {
    await invoice
    .waitForElementVisible('@lineGraph')
    .click('@lineGraph')
    .pause(2000);
});
Then(/^on x axis date recieved y axis payment$/, async () => {
    await invoice
    .click('@xAxis')
    .pause(2000);
    await invoice
    .click('@xDropdown').pause(1000);

    await invoice
    .click('@yAxis')
    .pause(2000);
    await invoice
    .click('@yDropdown')
    .pause(5000);
});