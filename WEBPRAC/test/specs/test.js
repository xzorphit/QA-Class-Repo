import BasePage from '../pages/BasePage';
//var assert = require('assert');



describe('webdriver.io page', function() {

    const base = new BasePage();

    it('should have the right title - the fancy generator way', function () {
        browser.url('/');
        

        //assert.equal(title, );

        base.expectTitle.should.equal(base.getTitle());


        base.homepageGuideBtn.waitForExist();
        base.homepageGuideBtn.click();


        base.homepageNodeJSLink.waitForExist();
        base.homepageNodeJSLink.click();


    });
});