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
  async openMessageMenu() {
    return await driver.findElement(By.xpath('/html/body/div[3]/nav/div[2]/div[4]/a/i')).click();
  }
  async openDialog() {
    return await driver.findElement(By.xpath('/html/body/div[3]/div[4]/div/div[3]/div[5]/div/div[1]/div[2]/div[2]/a/div[1]/div/strong')).click();
  }
  async inputMessage(text) {
    return await driver.findElement(By.css('textarea')).sendKeys(text);
  }
  async submitMessage() {
    return await driver.findElement(By.xpath('/html/body/div[3]/div[4]/div/div[4]/div[1]/div[1]/div/div/button/span[1]/i')).click();
  }
  async toMain() {
    return await driver.findElement(By.xpath('/html/body/div[3]/nav/a/img')).click();
  }
  async openMenu() {
    return await driver.findElement(By.css('.usermenu-container')).click();
  }
  async openLanguageMenu() {
    return await driver.findElement(By.xpath('/html/body/div[3]/nav/div[2]/div[5]/div/div/div/div/div/div[1]/a[5]')).click();
  }
  async chooseLanguage() {
    return await driver.findElement(By.xpath('/html/body/div[3]/nav/div[2]/div[5]/div/div/div/div/div/div[2]/div/div[3]/a[3]')).click();
  }
  async notificationMenu() {
    return await driver.findElement(By.css('.fa-bell-o')).click();
  }
  async notificationSettings() {
    return await driver.findElement(By.css('.fa-cog')).click();
  }
  async messageSettings() {
    return await driver.findElement(By.css('.header-container .fa-cog')).click();
  }
  async restrictMessages() {
    return await driver.findElement(By.css('.custom-radio .ml-2')).click();
  }
  async unstrictMessages() {
    return await driver.findElement(By.css('//*[@id="yui_3_17_2_1_1716258219277_56"]')).click();
  }


}

module.exports = new Main();

