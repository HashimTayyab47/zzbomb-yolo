const { Given, Then, When } = require('@cucumber/cucumber');

let collection;
Given(/^I am on the collection page$/, async () => {
    collection = browser.page.rootCollection();
    await collection.navigate();
});

When(/^I log in1$/, async () => {
    await collection.click('input[type="email"]');
    collection.setValue('input[type="email"]', 'usmanhamzashoaib11@gmail.com');
    await collection.click('input[type="password"]');
    collection.setValue('input[type="password"]', '61246124');
    collection.click('button[type="submit"]');
});

When(/^I click on 3 dots$/, async () => {
    await collection.click('@options').pause(2000);
});

Then(/^I click on archive collection button$/, async () => {
    await collection.click('@archive').pause(2000);
});

Then(/^I confirm on popup$/, async () => {
    await collection.waitForElementVisible('@confirm').click('@confirm').pause(2000);
})

