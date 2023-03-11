const { Given, Then, When } = require('@cucumber/cucumber');

Given(/^I am on the collection page$/, async () => {
    await browser.url('http://localhost:3000/collection/5-my-new-collection1');
});

When(/^I click on 3 dots$/, async () => {
    await browser.click('#root > div > div > main > div > div > div.css-qpd2g3.e16vm5g2 > div.css-1sjmoi4.e16vm5g1 > div.css-16y0tgk.e8mjkge0 > button > div > svg').pause(2000);
});

Then(/^I click on archive button$/, async () => {
    await browser.click('svg[aria-label="archive icon"]').pause(2000);
});

Then(/^I confirm on popup$/, async () => {
    await browser.click('Button.eyw0xx60.Button--warning.css-1q6qtcj.emiw9oj2').pause(2000);
})

