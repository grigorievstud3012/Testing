const BasePage = require('./Basepage');
const { By } = require('selenium-webdriver');
const myModule = require('./mypassword');

class Authorisation extends BasePage {

  async inputLogin(logintext) {
    return await driver.findElement(By.xpath('//*[@id="username"]')).sendKeys(logintext);
  }

  async inputPassword() {
    return await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys(myModule.getPassword());
  }

  async submitAuthorisation() {
    return await driver.findElement(By.xpath('//*[@id="loginbtn"]')).click();
  }
}

module.exports = new Authorisation();
