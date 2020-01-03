import BasePage from './BasePage';

export default class GettingStartedPage extends BasePage {

        constructor(){
            // private variables       
            
            super()

            this.gettingStartedPageTitle = 'Getting Started · WebdriverIO';

            this.nodejsLink = '/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/p[3]/a[1]';
        }

        // public variables

        get homepageNodeJSLink() {
            return browser.$(this.nodejsLink);
        }

        //public functions

}