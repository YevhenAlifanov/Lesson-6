let assert = require('assert');
const {Builder, By, Key, until, WebDriver} = require('selenium-webdriver');


describe('open bmwUSA.com', async function() {
  describe('find a car', async function() {

    it('compare everige price with actual', async function() {
      
    let driver = await new Builder().forBrowser('chrome').build();

    driver.manage().window().maximize() 
  
    await driver.get('https://www.bmwusa.com');
    

    await driver.executeScript("window.scrollBy(0,3000)", "");

    await driver.findElement(By.css('div[class="gkl-text-dark  cta-theme-holder"] a[href="/build-your-own.html#/series/3/sedan"]')).click()

      var car =await driver.wait(until.elementLocated(By.xpath("//div[normalize-space()='$43,450']"))).getText();


      
      let expected = 43450;
      
      let actual = car.replace(/[\s.,$]/g, '');
      let zalupa = parseFloat(actual)
      console.log(typeof zalupa);
      assert.strictEqual(expected, zalupa);

    
    await driver.quit();
    });
    
  });

});





    // await driver.findElement(By.xpath("(//a[contains(@aria-label,'Start Designing')])[1]")).click()

    // await browser.manage().timeouts().implicitlyWait(2000);

    // await driver.executeScript("window.scrollBy(0,500)", "");