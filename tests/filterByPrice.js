const { Given, Then, When } = require('@cucumber/cucumber');

let products;
Given(/^I am on product list$/, async () => {
    products = browser.page.products();
    await products.navigate();
});

When(/^I click on filters$/, async () => {
    await products
    .waitForElementVisible('@filterBtn')
    .click('@filterBtn');
});

Then(/^I can set price between 50 and 100$/, async () => {
    await products
    .waitForElementVisible('@minPrice')
    .setValue('@minPrice', 50)
    .pause(2000);
    await products
    .waitForElementVisible('@maxPrice')
    .setValue('@maxPrice', 100)
    .pause(2000);
});

Then(/^I click on apply$/, ()=> {
    return products
    .waitForElementVisible('@apply')
    .click('@apply')
    .pause(5000);
});