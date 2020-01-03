import BasePage from '../pages/BasePage';
import GettingStartedPage from '../pages/GettingStartedPage';
import NodeJSHomePage from '../pages/NodeJSHomePage';
/* The above imports are used to call in functions from the listed "page"s of code */

describe('webdriver.io page', function() {
/* describe is used to explain the subject of the test and nest the functions/variables used in the test, such as the functions/variables nested in "it()" */

    const base = new BasePage();
    const gettingStarted = new GettingStartedPage();
    const nodeJS = new NodeJSHomePage();
    /* const is used to instantiate new instances of the "page"s. The new instances can be called anything but try to keep them uniform with its page and dont call it something that already exists because it can confuse the system and it will be hard to find where the errors are. const variables cannot be reassigned */

    it('should have the right title - the fancy generator way', function () {
        /* Describes what we want to happen in the test */
        browser.url('/');
        /* Goes to the listed URL from the wdio.conf.js file. These two files are connected by the NPM "Test" package, which is why we use "npm run test" to run this test */

        
        base.expectTitle.should.equal(base.getTitle());
        /* base = calls BasePage

        expectTitle = private variable pulled from BasePage.js (could have been called "basePageTitle") This has a value given to it in BasePage

        base.getTitle() = public function pulled from BasePage.js

        should.equal is a function that makes sure that the value from "expectTitle" is the same as the value of the title from webdriver.io's webpage */


        base.homepageGuideBtn.waitForExist();
        base.homepageGuideBtn.click();


        gettingStarted.gettingStartedPageTitle.should.equal(gettingStarted.getTitle());

        gettingStarted.homepageNodeJSLink.waitForExist();
        gettingStarted.homepageNodeJSLink.click();

        nodeJS.nodeJSHomePageTitle.should.equal(nodeJS.getTitle());



    });
});