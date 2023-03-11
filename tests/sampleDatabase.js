const { Given, Then, When } = require('@cucumber/cucumber');


Given(/^I am on the landing page$/, async () => {
    await browser.url('http://localhost:3000').pause(1000);
});

When(/^I click on the browse Data button$/, async () => {
    await browser.click('#root > div > div > aside > nav > div > div > div:nth-child(3) > ul > li.exp4uno6.css-a39mct.emyths86 > a > div.css-qz4bcb.ew64ucb1').pause(1000);
});

When(/^I Click on sample Database$/, async () => {
    await browser.click('#root > div > div > main > div > div > div.css-lis3pc.e1g7wjgm1 > div > a > div').pause(1000);
});

Then(/^It shows list of sample databases$/, ()=> {
    return browser.waitForElementPresent('#root > div > div > main > div > div > div > div.css-1y10ge0.ehlbsyv1 > div > div.css-s5xdrg.e1pmwuoa1 > div:nth-child(2) > h5 > a > span', 5000);
});