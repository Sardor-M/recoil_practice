const webdriver = require("selenium-webdriver");
const driver = new webdriver.Builder().forBrowser("chrome").build();
const By = webdriver.By;
const until = webdriver.until;
/// useful utility to wait command to wait for a specific condition to be met

// instantiating the web browser page
driver
  .navigate()
  .to("https://www.gmail.com")
  .then(() =>
    driver
      .findElement(By.css("#identifierId.whsOnd.zHQkBf"))
      .sendKeys("randomemail@gmail.com")
  )
  .then(() =>
    driver.wait(until.elemmentLocated(By.css("#identifierId.whsOnd.zHQkBf")))
  )
  .then(() =>
    driver.findElement(By.css("#identifierId.whsOnd.zHQkBf").click())
  );
