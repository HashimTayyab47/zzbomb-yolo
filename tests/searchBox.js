const { Given, Then, When } = require('@cucumber/cucumber');


Given(/^I am on dashboard$/, async () => {
    await browser.url('http://localhost:3000');
});

When(/^I click on search box$/, async () => {
    await browser.click('#root > div > header > div > div.css-11x9xqg.e4w71dr2 > div.css-1afqies.e1kkw0a16 > div > input');
});

Then(/^I search for analytics event$/, async () => {
    await browser.setValue('#root > div > header > div > div.css-11x9xqg.e4w71dr2 > div.css-1afqies.e1kkw0a16 > div > input', 'Analytic Events').pause(2000);
});

Then(/^I click on analytics event$/, ()=> {
    return browser.click('#root > div > header > div > div.css-11x9xqg.e4w71dr2 > div.css-1afqies.e1kkw0a16 > div.css-1thnxl1.e1kkw0a11 > div > ul > li > a > div > div:nth-child(2) > div.css-1nrbvp2.eu0whuf7 > h3').pause(5000);
});