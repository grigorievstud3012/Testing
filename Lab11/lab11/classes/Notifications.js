const BasePage = require('./Basepage');
const { By } = require('selenium-webdriver');

class Notifications extends BasePage {
    async turnOffNotifications() {
        return await driver.findElement(By.css('#disable-notifications')).click();
      }
}

module.exports = new Notifications();
