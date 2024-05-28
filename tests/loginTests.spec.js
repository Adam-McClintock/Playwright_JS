import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/loginPage'

test('Login to Secure Page', async ({page}) => {

    const login = new LoginPage(page)

    await login.NavigateToLoginPage();

    // Example of POM page chaining below in JS
    const securePage = await login.login('tomsmith', 'SuperSecretPassword!');
    await securePage.SecurePageHeaderIsDisplayed();
    

});

test.afterEach(async ({ page }) => {
    await page.close();
  });