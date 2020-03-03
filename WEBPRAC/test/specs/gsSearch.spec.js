import GettingStartedPage from '../pages/GettingStartedPage';

describe('Given: As a user on the Getting Started Page, check that the search function works', () => {

    const gs = new GettingStartedPage();

    before('Setup',() => {
        browser.url('/docs/gettingstarted.html');
        gs.verifyTitle(gs.gettingStartedPageTitle); 
        gs.verifyUrl('gettingstarted');    
        /*
        verifyUrl = searches the URL text for "gettingstarted"   
        
        verifyTitle = searches the GettingStartedPage.js for the getting started page title variable that includes the string. makes sure that that string matches the expected/actual title
        */
    });

    it('When I search for a protocol', () => {
        gs.gsSearchField.waitForExist();
        gs.gsSearchField.clearElement();
        gs.gsSearchField.setValue('findElement');
        
    });

    it('And I click on the search protocol', () => {
        gs.gsSearchField.keys('Tab');
        
    });

    it('Then I validate that the protocol exists', () => {
        gs.findElementTItle.should.exist;
        gs.headerButtons.should.equal(6);
    });

    //it.only('') = runs only this "it" in the spec, makes it faster to test specific stuff
});