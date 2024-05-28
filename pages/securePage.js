const { expect } = require('@playwright/test');
const exp = require('constants');

exports.SecurePage = class SecurePage {

    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page;
        this.pageHeader = page.locator('h2', { hasText: ' Secure Area' });
    }

    async SecurePageHeaderIsDisplayed(){
        await expect(this.pageHeader).toBeVisible();
    }
}