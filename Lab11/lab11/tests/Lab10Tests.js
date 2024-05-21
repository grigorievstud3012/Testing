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

//   //2
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

//   //3
  it('Message', async function () {
    await Main.openThePage('https://dist.belstu.by/my/courses.php');
    await setDelay(delayTime);
    await Main.openMessageMenu();
    await setDelay(delayTime);
    await Main.openDialog();
    await setDelay(delayTime);
    await Main.inputMessage('Идет тестирование');
    await setDelay(delayTime);
    await Main.submitMessage();
    await setDelay(delayTime);
    
    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'The search result is correct')
  });
  
// //4
it('Download file', async function () {
    await setDelay(delayTime);
    await Main.openThePage('https://dist.belstu.by/my/courses.php');
    await setDelay(delayTime);
    await Main.openThePage('https://dist.belstu.by/course/view.php?id=201');
    await setDelay(delayTime);
    await Main.downloadFile();
    await setDelay(delayTime);
    
    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'The search result is correct')
  });

// //5
it('Testing in course', async function () {
    await setDelay(delayTime);
    await Main.openThePage('https://dist.belstu.by/my/courses.php');
    await setDelay(delayTime);
    await Main.openThePage('https://dist.belstu.by/course/view.php?id=201');
    await setDelay(delayTime);
    await Main.openTest();
    await setDelay(delayTime);
    await Main.startTest();
    await setDelay(delayTime);
    await Main.startTestSubmit();
    await setDelay(delayTime);
    await Main.endTest();
    await setDelay(delayTime);
    await Main.endTestSubmit();
    await setDelay(delayTime);
    await Main.endTestSubmitFinal();
    await setDelay(delayTime);
    
    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'The search result is correct')
  });

// //6
it('Language change', async function () {
    await setDelay(delayTime);
    await Main.openThePage('https://dist.belstu.by/my/courses.php');
    await setDelay(delayTime);
    await Main.openMenu();
    await setDelay(delayTime);
    await Main.openLanguageMenu();
    await setDelay(delayTime);
    await Main.chooseLanguage();
    await setDelay(delayTime);

    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'The search result is correct')
  });

// //7
it('Calendar event', async function () {
    await setDelay(delayTime);
    await Main.openCabinet();
    await setDelay(delayTime);
    await Main.openDay();
    await setDelay(delayTime);
    await Main.addEvent();
    await setDelay(delayTime);
    await Main.fillEvent(Date.now());
    await setDelay(delayTime);
    await Main.addEventSubmit();
    await setDelay(delayTime);
    
    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'The search result is correct')
  });

//8
it('Block adding', async function () {
    await setDelay(delayTime);
    await Main.openThePage('https://dist.belstu.by/my/courses.php');
    await setDelay(delayTime);
    await Main.openCabinet();
    await setDelay(delayTime);
    await Main.turnEditing();
    await setDelay(delayTime);
    await Main.addBlock();
    await setDelay(delayTime);
    await Main.addHTML();
    await setDelay(delayTime);
    
    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'The search result is correct')
  });

//9
it('Turning off notifications', async function () {
    await setDelay(delayTime);
    await Main.openThePage('https://dist.belstu.by/my/courses.php');
    await setDelay(delayTime);
    await Main.notificationMenu();
    await setDelay(delayTime);
    await Main.notificationSettings();
    await setDelay(delayTime);
    await Main.turnOffNotifications();
    await setDelay(delayTime);
    //
    await Main.openThePage('https://dist.belstu.by/my/courses.php');
    await setDelay(delayTime);
    await Main.notificationMenu();
    await setDelay(delayTime);
    await Main.notificationSettings();
    await setDelay(delayTime);
    await Main.turnOffNotifications();
    await setDelay(delayTime);
    
    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'The search result is correct')
  });

//10
it('Changing message privacy', async function () {
  await setDelay(delayTime);
  await Main.openThePage('https://dist.belstu.by/my/courses.php');
  await setDelay(delayTime);
  await Main.openMessageMenu();
  await setDelay(delayTime);
  await Main.messageSettings();
  await setDelay(delayTime);
  await Main.restrictMessages();
  await setDelay(delayTime);

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
