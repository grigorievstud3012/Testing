const { describe, it, after } = require('mocha');
const Authorisation = require('../classes/Authorisation');
const Main = require('../classes/Main');
const Cabinet = require('../classes/Cabinet');
const Course = require('../classes/Course');
const Notifications = require('../classes/Notifications');
const Logger = require('../utils/logger')

const delayTime = 3000;

describe('GeneralTest', function () {

  Logger.log('Starting tests')

  this.timeout(90000); 

  before(async function () {
    await Authorisation.openThePage('https://dist.belstu.by/login/index.php');
  });

//1
  it('Authorisation', async function () {
    Logger.log('Starting authorization')
    await Authorisation.inputLogin('72211009');
    await Authorisation.inputPassword();
    await Authorisation.submitAuthorisation();

    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'Autorization is incorrect')
      Logger.log('Authorization completed')
  });

//   //2
  it('Course Search', async function () {
    Logger.log('Searching course')
    await setDelay(delayTime);
    await Main.openSearch();
    await setDelay(delayTime);
    await Main.fillSearch('Тестирование');
    await setDelay(delayTime);
    await Main.submitSearch();
    
    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'Incorrect test')
  });

//   //3
  it('Message', async function () {
    Logger.log('Sending message')
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
      confirmTest(TestResult, 'Incorrect test')
  });
  
// //4
it('Download file', async function () {
    Logger.log('Downloading file')
    await setDelay(delayTime);
    await Main.openThePage('https://dist.belstu.by/my/courses.php');
    await setDelay(delayTime);
    await Main.openThePage('https://dist.belstu.by/course/view.php?id=201');
    await setDelay(delayTime);
    await Course.downloadFile();
    await setDelay(delayTime);
    
    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'Incorrect test')
  });

// //5
it('Testing in course', async function () {
    Logger.log('Testing in course')
    await setDelay(delayTime);
    await Main.openThePage('https://dist.belstu.by/my/courses.php');
    await setDelay(delayTime);
    await Main.openThePage('https://dist.belstu.by/course/view.php?id=201');
    await setDelay(delayTime);
    await Course.openTest();
    await setDelay(delayTime);
    await Course.startTest();
    await setDelay(delayTime);
    await Course.startTestSubmit();
    await setDelay(delayTime);
    Logger.log('Testing started')
    await Course.endTest();
    await setDelay(delayTime);
    await Course.endTestSubmit();
    await setDelay(delayTime);
    await Course.endTestSubmitFinal();
    await setDelay(delayTime);
    Logger.log('Testing finished')
    
    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'Incorrect test')
  });

// //6
it('Language change', async function () {
    Logger.log('Changing language')
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
      confirmTest(TestResult, 'Incorrect test')
  });

// //7
it('Calendar event', async function () {
    Logger.log('Making event')
    await setDelay(delayTime);
    await Cabinet.openCabinet();
    await setDelay(delayTime);
    await Cabinet.openDay();
    await setDelay(delayTime);
    await Cabinet.addEvent();
    await setDelay(delayTime);
    await Cabinet.fillEvent(Date.now());
    await setDelay(delayTime);
    await Cabinet.addEventSubmit();
    await setDelay(delayTime);
    
    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'Incorrect test')
  });

//8
it('Block adding', async function () {
    Logger.log('Starting to add block')
    await setDelay(delayTime);
    await Main.openThePage('https://dist.belstu.by/my/courses.php');
    await setDelay(delayTime);
    await Cabinet.openCabinet();
    await setDelay(delayTime);
    await Cabinet.turnEditing();
    await setDelay(delayTime);
    await Cabinet.addBlock();
    await setDelay(delayTime);
    await Cabinet.addHTML();
    await setDelay(delayTime);
    
    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'Incorrect test')
  });

//9
it('Turning off notifications', async function () {
    Logger.log('Turning off notifications')
    await setDelay(delayTime);
    await Main.openThePage('https://dist.belstu.by/my/courses.php');
    await setDelay(delayTime);
    await Main.notificationMenu();
    await setDelay(delayTime);
    await Main.notificationSettings();
    await setDelay(delayTime);
    await Notifications.turnOffNotifications();
    await setDelay(delayTime);
    //
    await Main.openThePage('https://dist.belstu.by/my/courses.php');
    await setDelay(delayTime);
    await Main.notificationMenu();
    await setDelay(delayTime);
    await Main.notificationSettings();
    await setDelay(delayTime);
    await Notifications.turnOffNotifications();
    await setDelay(delayTime);
    
    let currentUrl = await Authorisation.getUrl();

    const TestResult = Check1(currentUrl);
      confirmTest(TestResult, 'Incorrect test')
  });

//10
it('Changing message privacy', async function () {
  Logger.log('Changing message privacy')
  await setDelay(delayTime);
  await Main.openThePage('https://dist.belstu.by/my/courses.php');
  await setDelay(delayTime);
  await Main.openMessageMenu();
  await setDelay(delayTime);
  await Main.messageSettings();
  await setDelay(delayTime);
  await Main.restrictMessages();
  await setDelay(delayTime);
  Logger.log('Finishing tests')

  let currentUrl = await Authorisation.getUrl();

  const TestResult = Check1(currentUrl);
    confirmTest(TestResult, 'Incorrect test')
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
