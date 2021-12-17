let assert = require('assert');
const {Builder, By, Key, until, WebDriver} = require('selenium-webdriver');


describe('open bmwUSA.com', async function() {
  describe('find a car', async function() {

    it('compare everige price with actual', async function() {
      
    let driver = await new Builder().forBrowser('chrome').build();

    driver.manage().window().maximize() 
  
    await driver.get('https://www.bmwusa.com');
    
    // await driver.executeScript("window.scrollTo(0,3000)", "");
    let element = await driver.findElement(By.xpath('//a[@href="/build-your-own.html#/series/3/sedan"]'));
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);

    await driver.findElement(By.xpath('//a[@href="/build-your-own.html#/series/3/sedan"]')).click()

      var car =await driver.wait(until.elementLocated(By.xpath("(//*[@class ='variant-pricing'])[2]//div[2]"))).getText();

      
      let expected = 43450;

      let actual = car.replace("$", "").replace(",", "");
      let truePrice = parseFloat(actual)

      assert.strictEqual(expected, truePrice);

    
    await driver.quit();
    });
    
  });

});




