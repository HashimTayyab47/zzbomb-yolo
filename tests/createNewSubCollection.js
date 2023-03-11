const { Given, Then, When } = require('@cucumber/cucumber');


Given(/^I am on main dashboard$/, async () => {
    await browser.url('http://localhost:3000');
});

When(/^I click on new button$/, async () => {
    await browser.click('#root > div > header > div > div.css-11x9xqg.e4w71dr2 > div.css-16y0tgk.e8mjkge0 > span:nth-child(1) > button');
});

Then(/^I click on collection$/, async () => {
    await browser.click('body > span.PopoverContainer.tether-element.tether-element-attached-top.tether-target-attached-bottom.PopoverContainer--open.popover.tether-element-attached-right.tether-target-attached-right.tether-enabled > span > div > div > div > ol > li:nth-child(4) > div').pause(2000);
});

Then(/^I add name for collection$/, ()=> {
    return browser.setValue('#formField-name > div.css-ozd7xs.e197oqdz0 > div > input', 'My new Collection1').pause(5000);
});

Then(/^I create the collection$/, ()=> {
    return browser.click('body > div.ModalContainer > div > div > div > div > div > div.ModalBody.px4 > div > form > div.flex.align-center.flex-reverse > button.Button.Button.eyw0xx60.Button--primary.css-1q6qtcj.emiw9oj2').pause(5000);
});