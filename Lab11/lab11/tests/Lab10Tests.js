const { describe, it, after } = require('mocha');
const Authorisation = require('../classes/Authorisation');
const Main = require('../classes/Main');

const delayTime = 2000;

describe('GeneralTest', function () {

  this.timeout(90000); // Increase timeout if necessary

  before(async function () {
    await Authorisation.openThePage('https://dist.belstu.by/login/index.php');
  });

  //1
  it('Authorisation', async function () {

    await Authorisation.inputLogin('72211009');
    await Authorisation.inputPassword();
    await Authorisation.submitAuthorisation();

    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'The search result is correct')
  });

  //2
  it('Course Search', async function () {

    await setDelay(delayTime);
    await Main.openSearch();
    await setDelay(delayTime);
    await Main.fillSearch('Тестирование');
    await setDelay(delayTime);
    await Main.submitSearch();
    
    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'The search result is correct')
  });


  after(async function () {
    await Authorisation.closeBrowser();
  });
});

async function confirmTest(testCondition, outpurString) {
  if (testCondition) {
    assert.isTrue(true, outpurString);
  } 
}

async function Check1(currentUrl) {
  console.log(currentUrl)
  if (currentUrl == 'https://dist.belstu.by/my/courses.php') 
      {
        return true;
      } return false;
}

async function setDelay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
