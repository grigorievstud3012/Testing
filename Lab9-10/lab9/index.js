const myModule = require('./mypassword');

const assert = require('chai').assert;
const { Builder, By, Key } = require('selenium-webdriver');

async function BELSTUAuthorisation() {
  let driver = await new Builder()
    .forBrowser('firefox')
    .build();

  let TestResult = true;

  try {
    console.log("Opening Site...");
    await driver.get('https://dist.belstu.by/login/index.php');

    console.log("Entering login...");
    await driver.findElement(
      By.xpath('//*[@id="username"]'))
      .sendKeys('72211009');

      console.log("Entering password...");
    await driver.findElement(
      By.xpath('//*[@id="password"]'))
      .sendKeys(myModule.getPassword());

      console.log("Authorisation...");
    await driver.findElement(
      By.xpath('//*[@id="loginbtn"]'))
      .click();


    await delay(2500);

    console.log("Checking result...");
    let currentUrl = await driver.getCurrentUrl();

      if (currentUrl === 'https://dist.belstu.by/my/courses.php') 
      {
        TestResult = true;
      } else TestResult = false;

  } finally {
    console.log("Closing browser...");
    await driver.quit();
    return TestResult;
  }
};

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('BELSTU Tests', function () {

  this.timeout(45000);

  it('Authorisation', async () => {
    let result = await BELSTUAuthorisation();
    assert.isTrue(result, 'the search result is correct');
  });

});
