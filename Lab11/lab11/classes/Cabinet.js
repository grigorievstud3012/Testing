const BasePage = require('./Basepage');
const { By } = require('selenium-webdriver');

class Cabinet extends BasePage {
    async openCabinet() {
        return await driver.findElement(By.xpath('/html/body/div[3]/nav/div[1]/nav/ul/li[2]/a')).click();
      }
      async openDay() {
        return await driver.findElement(By.xpath('/html/body/div[3]/div[3]/div[2]/section/aside/section[1]/div/div/div[1]/div/div[2]/table/tbody/tr[4]/td[3]/div[1]/a/span/span')).click();
      }
      async addEvent() {
        return await driver.findElement(By.css('.btn-primary')).click();
      }
      async fillEvent(text) {
        return await driver.findElement(By.css('#id_name')).sendKeys(text);
      }
      async addEventSubmit() {
        return await driver.findElement(By.css('.modal-footer .btn-primary')).click();
      }
      async turnEditing() {
        return await driver.findElement(By.css('.custom-control-input')).click();
      }
      async addBlock() {
        return await driver.findElement(By.css('#region-main .block-add')).click();
      }
      async addHTML() {
        return await driver.findElement(By.css('.modal-content .list-group .list-group-item')).click();
      }
}

module.exports = new Cabinet();
