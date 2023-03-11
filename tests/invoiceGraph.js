const { Given, Then, When } = require('@cucumber/cucumber');

Given(/^I am on the invoice page$/, async () => {
    await browser.url('http://localhost:3000/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoxLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjZ9LCJ0eXBlIjoicXVlcnkifSwiZGlzcGxheSI6InRhYmxlIiwidmlzdWFsaXphdGlvbl9zZXR0aW5ncyI6e319');
});

When(/^I click on visualization$/, async () => {
    await browser
    .click('button[data-testid="viz-type-button"]')
});

Then(/^I select line graph$/, async () => {
    await browser
    .click('div[data-testid="Line-button"]').pause(2000);
});
Then(/^on x axis date recieved y axis payment$/, async () => {
    await browser
    .click('div[data-testid="chartsettings-field-picker"]')
    .pause(2000);
    await browser
    .click('div[aria-label="Date Received"]').pause(1000);

    await browser
    .click('#root > div > div > main > div > div > div.css-1q5f4d.eb9z3dt6 > aside.css-1rpciof.e1e6x9or1 > div > div > div > div.flex.flex-column > div.full-height.relative.scroll-y.scroll-show.pt2.pb4 > div.css-3ptxwa.e9htjoz4 > div > div')
    .pause(2000);
    await browser
    .click('div[aria-label="Payment"]').pause(5000);
});