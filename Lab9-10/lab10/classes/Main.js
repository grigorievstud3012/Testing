const { By } = require('selenium-webdriver');
const BasePage = require('./Basepage');


class Main extends BasePage {
  async openSearch() {
    return await driver.findElement(By.xpath('/html/body/div[3]/nav/div[2]/div[1]/a/i')).click();
  }
  async fillSearch(text) {
    return await driver.findElement(By.css('.mform > div:nth-child(2) input')).sendKeys(text);
  }
  async submitSearch() {
    return await driver.findElement(By.xpath('/html/body/div[3]/nav/div[2]/div[1]/div/form/div/div/button/i')).click();
  }
}

module.exports = new Main();

