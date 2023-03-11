const { Given, Then, When } = require('@cucumber/cucumber');

Given(/^I am on the samplea database page$/, async () => {
    await browser.url('http://localhost:3000/browse/1-sample-database');
});

When(/^I click on orders$/, async () => {
    await browser
    .click('#root > div > div > main > div > div > div > div.css-lis3pc.e1g7wjgm1 > div:nth-child(5)');
});

Then(/^I click on Summarize$/, async () => {
    await browser
    .click('#root > div > div > main > div > div > div.css-2mi1c6.eb9z3dt3 > div > div.css-1mjo75b.e17ixpr11 > button.Button.hide.sm-show.e17ixpr110.Button--large.css-n8oiuv.emiw9oj2').pause(2000);
});
Then(/^I click on done with count filter$/, async () => {
    await browser
    .click('Button.e1xvf8sq0.css-1xe323u.emiw9oj2')
    .pause(2000);
});