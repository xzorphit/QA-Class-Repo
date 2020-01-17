import GettingStartedPage from '../pages/GettingStartedPage';

describe('Given: As a user on the Getting Started Page', () => {

    const gs = new GettingStartedPage();

    before('Setup',() => {
        browser.url('/docs/gettingstarted.html');
        gs.gettingStartedPageTitle.should.equal(gs.getTitle());        
    });

    it('When I search for a protocol', () => {
        gs.gsSearchField.clearElement();
        gs.gsSearchField.setValue('findElement');
        
    });

    it('And I click on the search protocol', () => {
        gs.gsSearchField.keys('Tab');
        
    });

    it('Then I validate that the protocol exists', () => {
        gs.findElementTItle.should.exist;
        
    });
});