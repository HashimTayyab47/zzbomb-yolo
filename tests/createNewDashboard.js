const { Given, Then, When } = require('@cucumber/cucumber');

let dashboard;
Given(/^I am on original dashboard$/, async () => {
    dashboard = browser.page.dashboard();
    await dashboard.navigate();
});

When(/^I log in3$/, async () => {
    await dashboard.click('input[type="email"]');
    dashboard.setValue('input[type="email"]', 'usmanhamzashoaib11@gmail.com');
    await dashboard.click('input[type="password"]');
    dashboard.setValue('input[type="password"]', '61246124');
    dashboard.click('button[type="submit"]');
});

When(/^I click on new$/, async () => {
    await dashboard
    .waitForElementVisible('@new')
    .click('@new');
});

Then(/^I click on dashboard$/, async () => {
    await dashboard.click('@newDash').pause(2000);
});

Then(/^I add name for dashboard$/, ()=> {
    return dashboard.setValue('@nameField', 'My new dashboard').pause(5000);
});

Then(/^I create the dashboard$/, ()=> {
    return dashboard.click('@create').pause(5000);
});