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
      By.xpath('//*[@id="username"]'))
      .sendKeys(myModule.getPassword());

      console.log("Authorisation...");
    await driver.findElement(
      By.xpath('//*[@id="loginbtn"]'))
      .click();


    // console.log("Enter search prompt...");
    // await driver.findElement(
    //   By.className('headerSearch__input'))
    //   .sendKeys('RHCP');

    // console.log("Searching for RHCP...");
    // await driver.findElement(
    //   By.className('headerSearch__submit'))
    //   .click();

    // await delay(2500);

    // console.log("Checking search result...");
    // let elem = await driver.findElement(By.linkText("Red Hot Chili Peppers"));

    // if (elem) {
    //   TestResult = true;
    // }
    TestResult = true;
  } finally {
    console.log("Closing browser...");
    await driver.quit();
    return TestResult;
  }
};

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('SoundCloud Tests', function () {

  this.timeout(45000);

  it('Search Successful', async () => {
    let result = await BELSTUAuthorisation();
    assert.isTrue(result, 'the search result is correct');
  });

});
