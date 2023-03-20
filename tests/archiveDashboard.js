const { Given, Then, When } = require('@cucumber/cucumber');

let root;
Given(/^I am on the dashboard page$/, async () => {
    root = browser.page.root();
    await root.navigate();
});

When(/^I log in2$/, async () => {
    await root.click('input[type="email"]');
    root.setValue('input[type="email"]', 'usmanhamzashoaib11@gmail.com');
    await root.click('input[type="password"]');
    root.setValue('input[type="password"]', '61246124');
    root.click('button[type="submit"]');
});

When(/^I click on 3 dots on the dashboard$/, async () => {
    await root.click('@options').pause(2000);
});

Then(/^I click on archive dashboard button$/, async () => {
    await root.click('@archive').pause(2000);
});
