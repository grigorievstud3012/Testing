const BasePage = require('./Basepage');
const { By } = require('selenium-webdriver');

class Course extends BasePage {
    async downloadFile() {
        return await driver.findElement(By.xpath('/html/body/div[3]/div[4]/div/div[3]/div/section/div/div/div/ul/li[2]/div[2]/ul/li[4]/div/div[1]/div/div[1]/div/div[2]/div/a')).click();
      }
      async openTest() {
        return await driver.findElement(By.xpath('/html/body/div[3]/div[4]/div/div[3]/div/section/div/div/div/ul/li[4]/div[2]/ul/li[2]/div/div[1]/div/div[1]/div/div[2]/div/a')).click();
      }
      async startTest() {
        return await driver.findElement(By.css('.btn-primary')).click();
      }
      async startTestSubmit() {
        return await driver.findElement(By.css('#id_submitbutton')).click();
      }
      async endTest() {
        return await driver.findElement(By.css('.endtestlink')).click();
      }
      async endTestSubmit() {
        return await driver.findElement(By.css('.btn-primary')).click();
      }
      async endTestSubmitFinal() {
        return await driver.findElement(By.css('.modal-footer .btn-primary')).click();
      }
}

module.exports = new Course();
