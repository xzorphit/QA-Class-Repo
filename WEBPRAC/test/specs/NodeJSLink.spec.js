import BasePage from '../pages/BasePage';
import GettingStartedPage from '../pages/GettingStartedPage';
import NodeJSHomePage from '../pages/NodeJSHomePage';


describe('Given: as a user on the WebDriver.IO page', function() {
/* function() {} and ()=>{} are the same thing but thelater is just doing it without stating that it is a function */

    const base = new BasePage();
    const gettingStarted = new GettingStartedPage();
    const nodeJS = new NodeJSHomePage();
    

    before('Setup', () => {
        
        browser.url('/');   
        base.expectTitle.should.equal(base.getTitle()); 
        /* function() {} and ()=>{} are the same thing but thelater is just doing it without stating that it is a function 
        
        we are moving browser.url and the title validation to the "before" so that it is done before getting to the functions, lets us know if the page hasent loaded immediately
        */    
    });

    it('I click on the Guide button, and reach the Getting Started page and check for the title', function () {
        base.homepageGuideBtn.waitForExist();
        base.homepageGuideBtn.click();
    
        gettingStarted.gettingStartedPageTitle.should.equal(gettingStarted.getTitle());
        
    });

    it('Then I click on the NodeJS link', () => {
        gettingStarted.homepageNodeJSLink.waitForExist();
        gettingStarted.homepageNodeJSLink.click();
        
    });

    it('I then verify that the NodeJS page loads', () => {
        nodeJS.nodeJSHomePageTitle.should.equal(nodeJS.getTitle());
    });

    it('Then I am good', () => {});

});

