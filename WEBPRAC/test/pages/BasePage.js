

export default class BasePage {

    constructor() {
        // private variables

        this.expectTitle = 'WebdriverIO · Next-gen WebDriver test framework for Node.js';
        this.guideBtn = '/html/body/div[1]/div/header/div/nav/ul/li[1]/a';
        this.nodejsLink = '/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/p[3]/a[1]';
    }
    
    // public variables

    get homepageGuideBtn() {
        return browser.$(this.guideBtn);
    }
    
    get homepageNodeJSLink() {
        return browser.$(this.nodejsLink);
    }


    // public functions
    
    getTitle() {
        return  browser.getTitle();         
    }

}
