const { expect } = require('@playwright/test');
const { SecurePage } = require('./securePage');


exports.LoginPage = class LoginPage {

    /**
   * @param {import('@playwright/test').Page} page
   */

        constructor(page){
            this.page = page;
            this.usernameField = page.getByLabel('Username');
            this.passwordField = page.getByLabel('Password');
            this.loginBtn = page.getByRole('button', { name: 'Login' });
        }

        async NavigateToLoginPage(){
            await this.page.goto('https://the-internet.herokuapp.com/login');
        }

        async login(username, password){
            await this.usernameField.fill(username);
            await this.passwordField.fill(password);
            await this.loginBtn.click();

            const securePage = new SecurePage(this.page);
            return securePage;
        }
}

