const { Builder, By, Key, until } = require("selenium-webdriver");

async function testLogin() {
  const driver = await new Builder().forBrowser("chrome").build();
  const url = "http://localhost:3000/login";

  try {
    await driver.get(url);

    const emailInput = await driver.findElement(By.name("email"));
    const passwordInput = await driver.findElement(By.name("password"));

    const email = "obak1399@gmail.com";
    const password = "password";

    await emailInput.sendKeys(email);

    // Add a delay (e.g., 1 second) after entering the email
    await driver.sleep(1000);

    await passwordInput.sendKeys(password);

    // Add a delay (e.g., 1 second) after entering the password
    await driver.sleep(1000);

    const loginButton = await driver.wait(
      until.elementIsInteractable(driver.findElement(By.id("loginButton"))),
      10000
    );

    // Click the login button
    await loginButton.click();

    // You can add an explicit wait for an element to appear on the next page
    await driver.wait(until.titleIs("User Dashboard"), 10000);

    // If the login was successful, you can perform further actions or assertions
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await driver.quit();
  }
}

testLogin();
