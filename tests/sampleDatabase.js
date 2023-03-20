const { Given, Then, When } = require('@cucumber/cucumber');

let mainPage;
Given(/^I am on the landing page$/, async () => {
    mainPage = browser.page.mainPage();
    await mainPage.navigate();
});

When(/^I log in5$/, async () => {
    await mainPage.click('input[type="email"]');
    mainPage.setValue('input[type="email"]', 'usmanhamzashoaib11@gmail.com');
    await mainPage.click('input[type="password"]');
    mainPage.setValue('input[type="password"]', '61246124');
    mainPage.click('button[type="submit"]');
});

When(/^I click on the browse Data button$/, async () => {
    await mainPage.click('@browse').pause(1000);
});

When(/^I Click on sample Database$/, async () => {
    await mainPage.click('@sample').pause(1000);
});

Then(/^It shows list of sample databases$/, ()=> {
    return mainPage.waitForElementPresent('@list', 5000);
});