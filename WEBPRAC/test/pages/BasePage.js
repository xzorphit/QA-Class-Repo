

export default class BasePage {
/* export allows this file to be inmported into other files */

    constructor() {
    /* constructor sets values for objects used in this BasePage class. All of the "this.EXAMPLE = VALUE" lines are part of the constructor */

        // private variables

        this.baseExpectTitle = 'WebdriverIO · Next-gen WebDriver test framework for Node.js';
        this.guideBtn = '/html/body/div[1]/div/header/div/nav/ul/li[1]/a';
        this.headBtns = '/html/body/div[1]/div/header/div/nav/ul/li';
        
        
        /* this = a reference to the object that comes after it
        
        baseExpectTitle = a variable that is given the value that follows it- the same goes for guideBtn and nodejsLink. this is where they are created and where they will be called from in the other files that import BasePage.js */

    }
    
    // public variables

    get headerButtons() {
        return browser.$$(this.headBtns).length;
    }
    //this format is useful for smoke tests

    get homepageGuideBtn() {
        return browser.$(this.guideBtn);
    }
    /* get = retrieves the data that follows it

    homepageGuideBtn = a variabl/function that is created right here. this function will return the guideBtn's value from the browser/webpage that "test.js" will be on at the time it calls "homepageGuideBtn" 

    return = tells whatever follows it to come back to the test.. i guess
    
    browser = is where the following function/instructions will take place
    
    .$ = means find whatever comes after it 
    guideBtn = a set variable that was assigneda value earlier on this same file under "constructor"

    length = sets parameter for what the function in gsSearch.spec.js- "should.equal(6)". length asks for a number when paired with $$
    */
    



    // public functions
    
    getTitle(){
        return browser.getTitle();
    }

    verifyTitle(expectedTitle) {
        $('body').waitForVisible();
        const actualTitle = browser.getTitle();
        return actualTitle.should.equal(expectedTitle);

        //return  browser.getTitle();         
    }

    verifyUrl(url){
        $('body').waitForVisible();
        const getUrl = browser.getUrl();
        return getUrl.should.include(url)
    };

    

    /* 
    verifyTitle = function that is used to get the title of whatever the function calls for
    
    verifyUrl = gets the text from the URL while .Url takes you to the URL

    $('body') = waits for the HTML body to be there

    const getUrl = makes "getUrl" a function
    
    return = brings back the data/value of whatever follows it
    browser = where the following function/instructions will take place
    */

}
