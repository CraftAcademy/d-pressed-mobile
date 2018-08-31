import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageOneTitleText() {
    return element(by.tagName('page-one')).element(by.tagName('ion-title')).getText();
  }

  clickMenu() {
      element(by.css('.bar-button-menutoggle')).click()
        //.then(() => {
        //  browser.driver.sleep(2000); // wait for the animation
         // element.all(by.css('.toolbar-title')).first().getText().then(text => expect(text).toEqual('Pages'));
      //});
  }

  fillInForm(email, password) {
    element(by.css('.bar-button-menutoggle')).click()
    browser.driver.sleep(500)
    .then(() => {
      element.all(by.css('.toolbar-title')).first().getText().then(text => expect(text).toEqual('Menu'));
      browser.driver.sleep(500);
      element(by.buttonText('Login')).click().then(() => {
        browser.driver.sleep(500);
        element.all(by.className('alert-input')).then((items) => {
          items[0].sendKeys(email);
          items[1].sendKeys(password);
        });
      })
      browser.driver.sleep(500);
      element(by.cssContainingText('.button-inner', 'Login')).click();
      browser.driver.sleep(2000); 
    })};

    results_card_content() {
      return element(by.css('ion-card-header')).getText();
    };
}
