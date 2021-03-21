const { element, ExpectedConditions } = require("protractor");

describe('Crewing CRM', function() {
    
    // it('Should have username and password fields empty', function() {
    //   browser.get('https://test.crewingcrm.com');

    //      expect(element(by.id('mat-input-0')).getAttribute('value')).
    //     toEqual('')&&expect(element(by.id('mat-input-1')).getAttribute('value')).
    //     toEqual('');
    // });
    // it('Should have a placeholders', function() {
    //     browser.get('https://test.crewingcrm.com');
    
    //      expect(element(by.id('mat-input-0')).getAttribute('data-placeholder')).
    //       toEqual('Login/E-mail')&&expect(element(by.id('mat-input-1')).getAttribute('placeholder')).
    //       toEqual('Password');
    //   });
    //   it('Should have a Login button disabled when fields are empty and enabled when completed', function() {
    //     browser.get('https://test.crewingcrm.com');
    //      expect(element(by.xpath('/html/body/app-root/app-login/div/div/div[2]/mat-card/mat-card-actions/app-submit-button/button')).getAttribute('disabled')).
    //       toEqual('true');
    //       element(by.id('mat-input-0')).sendKeys('admin');
    //       element(by.id('mat-input-1')).sendKeys('admin');
    //       expect(element(by.xpath('/html/body/app-root/app-login/div/div/div[2]/mat-card/mat-card-actions/app-submit-button/button')).getAttribute('color')).
    //       toEqual('primary');
    //   });
      it('Homepage should contain correct links for header buttons', async function() {
        browser.get('https://test.crewingcrm.com');
          element(by.id('mat-input-0')).sendKeys('admin');
          element(by.id('mat-input-1')).sendKeys('admin');
          element(by.xpath('/html/body/app-root/app-login/div/div/div[2]/mat-card/mat-card-actions/app-submit-button/button')).click()

element.all(by.css('.signature')).getText().then(function(menus) {
    console.log(menus.length);
    for(i=0;i<5;i++){
        // element(by.css('.signature'))[0].click();
        console.log(menus[i]);
        element(by.xpath('/html/body/app-root/app-home/div/mat-toolbar/div[1]/a['+(i+1)+']')).click();
        expect(browser.getCurrentUrl()).toEqual(('https://test.crewingcrm.com/'+menus[i]).toLowerCase());
    }
});
          

  })});
  