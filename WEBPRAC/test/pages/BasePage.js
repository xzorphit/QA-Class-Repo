

export default class BasePage {
/* export allows this file to be inmported into other files */

    constructor() {
    /* constructor sets values for objects used in this BasePage class. All of the "this.EXAMPLE = VALUE" lines are part of the constructor */

        // private variables

        this.expectTitle = 'WebdriverIO · Next-gen WebDriver test framework for Node.js';
        this.guideBtn = '/html/body/div[1]/div/header/div/nav/ul/li[1]/a';
        this.nodejsLink = '/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/p[3]/a[1]';
        /* this = a reference to the object that comes after it
        
        expectTitle = a variable that is given the value that follows it- the same goes for guideBtn and nodejsLink. this is where they are created and where they will be called from in the other files that import BasePage.js */

    }
    
    // public variables

    get homepageGuideBtn() {
        return browser.$(this.guideBtn);
    }
    /* get = retrieves the data that follows it

    homepageGuideBtn = a variabl/function that is created right here. this function will return the guideBtn's value from the browser/webpage that "test.js" will be on at the time it calls "homepageGuideBtn" 

    return = tells whatever follows it to come back to the test.. i guess
    
    browser = is where the following function/instructions will take place
    
    .$ = means find whatever comes after it 
    guideBtn = a set variable that was assigneda value earlier on this same file under "constructor" */
    



    // public functions
    
    getTitle() {
        return  browser.getTitle();         
    }
    /* getTitle = function that is used to get the title of whatever the function calls for
    
    return = brings back the data/value of whatever follows it
    browser = where the following function/instructions will take place
    */

}
