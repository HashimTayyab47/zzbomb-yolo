**In the first task we explored the API test automation and Unit Test frameworks in the open-source project** 

The api test automation tool used for this project in nightwatch js tool. We will be using the @nightwatch/apitesting plugin to perform our testing. 

SuperTest is a framework used for API testing which is integrated into the nightwatch and offer a very interactive API testing tool. It uses expect() function from chai library to perform assertions.

**To initialize the test environment:**

1) From a command line run npm init nightwatch@latest

2) During the guided setup select end-to-end testing and TypeScript

3) Continue through accepting defaults for the remaining prompts.

4) Change src_folders to src_folders: ['nightwatch/tests'], 

5) Change plugins to plugins: ['@nightwatch/apitesting'] to use the API testing plugin of nightwatch

Then simply we had to add the type in :npx nightwatch [test_folder] to run the test.
