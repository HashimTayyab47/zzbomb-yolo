const { Given, Then, When } = require('@cucumber/cucumber');

let newCollection;
Given(/^I am on main dashboard$/, async () => {
    newCollection = browser.page.newCollection();
    await newCollection.navigate();
});

When(/^I log in4$/, async () => {
    await newCollection.click('input[type="email"]');
    newCollection.setValue('input[type="email"]', 'usmanhamzashoaib11@gmail.com');
    await newCollection.click('input[type="password"]');
    newCollection.setValue('input[type="password"]', '61246124');
    newCollection.click('button[type="submit"]');
});

When(/^I click on new button$/, async () => {
    await newCollection.click('@new');
});

Then(/^I click on collection$/, async () => {
    await newCollection.click('@collection').pause(2000);
});

Then(/^I add name for collection$/, ()=> {
    return newCollection.setValue('@name', 'My new Collection1').pause(5000);
});

Then(/^I create the collection$/, ()=> {
    return newCollection.click('@create').pause(5000);
});