const { Given, Then, When } = require('@cucumber/cucumber');


Given(/^I am on product list$/, async () => {
    await browser.url('http://localhost:3000/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoxLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjF9LCJ0eXBlIjoicXVlcnkifSwiZGlzcGxheSI6InRhYmxlIiwidmlzdWFsaXphdGlvbl9zZXR0aW5ncyI6e319');
});

When(/^I click on filters$/, async () => {
    await browser.click('#root > div > div > main > div > div > div.css-2mi1c6.eb9z3dt3 > div > div.css-1mjo75b.e17ixpr11 > button.Button.hide.sm-show.e17ixpr110.Button--large.css-1jt5nk7.emiw9oj2');
});

Then(/^I can set price between 50 and 100$/, async () => {
    await browser.setValue('body > div.ModalContainer > div > div > div > div > div > div.css-cjtwxj.e1m9c4d211 > div > div > div:nth-child(3) > div > div.css-r41nq4.esebd2z3 > div > div:nth-child(1) > input', 50).pause(2000);
    await browser.setValue('body > div.ModalContainer > div > div > div > div > div > div.css-cjtwxj.e1m9c4d211 > div > div > div:nth-child(3) > div > div.css-r41nq4.esebd2z3 > div > div:nth-child(3) > input', 100).pause(2000);
});

Then(/^I click on apply$/, ()=> {
    return browser.click('body > div.ModalContainer > div > div > div > div > div > div.css-14akq28.e1m9c4d28 > button.Button.eyw0xx60.Button--primary.css-1q6qtcj.emiw9oj2 > div > div').pause(5000);
});