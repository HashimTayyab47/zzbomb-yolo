const { Given, Then, When } = require('@cucumber/cucumber');


Given(/^I am on original dashboard$/, async () => {
    await browser.url('http://localhost:3000');
});

When(/^I click on new$/, async () => {
    await browser.click('#root > div > header > div > div.css-11x9xqg.e4w71dr2 > div.css-16y0tgk.e8mjkge0 > span:nth-child(1) > button');
});

Then(/^I click on dashboard$/, async () => {
    await browser.click('body > span > span > div > div > div > ol > li:nth-child(3) > div').pause(2000);
});

Then(/^I add name for dashboard$/, ()=> {
    return browser.setValue('#formField-name > div.css-ozd7xs.e197oqdz0 > div > input', 'My new dashboard').pause(5000);
});

Then(/^I create the dashboard$/, ()=> {
    return browser.click('body > div.ModalContainer > div > div > div > div > div > div.ModalBody.px4 > div > form > div.flex.align-center.flex-reverse > button.Button.Button.eyw0xx60.Button--primary.css-1q6qtcj.emiw9oj2').pause(5000);
});