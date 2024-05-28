const { expect } = require('@playwright/test');
const exp = require('constants');

exports.PracticePage = class PracticePage {

    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page;
        this.pageHeader = page.locator('h1', { hasText: 'Volunteer Sign Up' });

        // Form Fields
        this.firstnameInput = page.locator("//input[@id='RESULT_TextField-1']");
        this.surnameInput = page.locator("//input[@id='RESULT_TextField-2']");
        this.phoneInput = page.locator("//input[@id='RESULT_TextField-3']");
        this.countryInput = page.locator("//input[@id='RESULT_TextField-4']");
        this.cityInput = page.locator("//input[@id='RESULT_TextField-5']");
        this.emailInput = page.locator("//input[@id='RESULT_TextField-6']");

        // Gender Radio Buttons
        this.maleRdoBtn = page.locator("//label[@for='RESULT_RadioButton-7_0']");
        this.femaleRdoBtn = page.locator("//label[@for='RESULT_RadioButton-7_0']");

        // Days of week Check Boxes
        this.sunCheck = page.locator("//label[contains(text(),'Sunday')]");
        this.monCheck = page.locator("//label[contains(text(),'Monday')]");
        this.tueCheck = page.locator("//label[contains(text(),'Tuesday')]");
        this.wedCheck = page.locator("//label[contains(text(),'Wednesday')]");
        this.thuCheck = page.locator("//label[contains(text(),'Thursday')]");
        this.friCheck = page.locator("//label[contains(text(),'Friday')]");
        this.satCheck = page.locator("//label[contains(text(),'Saturday')]");

        // Best time dropdown
        this.bestTimeDrpDwn = page.locator("//select[@id='RESULT_RadioButton-9']");
    }

    async NavigateToPracticePage(){
        await this.page.goto('https://fs2.formsite.com/meherpavan/form2/index.html?1537702596407');
        //return this.page;
    }

    async PracticePageHeaderIsDisplayed(){
        await expect(this.pageHeader).toBeVisible();
    }

    async FillVoluteerForm(){
        
        await this.firstnameInput.fill('Adam');
        await this.surnameInput.fill("Macc");
        await this.phoneInput.fill("07803221176");
        await this.countryInput.fill("Ireland");
        await this.cityInput.fill("Derry");
        await this.emailInput.fill("Test@hotmail.com");

        // Checking radio button
        await this.maleRdoBtn.check();
        await expect(this.maleRdoBtn).toBeChecked();

        // Checking Days of week Check boxes
        await this.sunCheck.check();
        await this.tueCheck.check();
        await this.wedCheck.check();

        // Select from dropdown
        // Asserting that correct option is displayed, Evening has value of Radio-2
        await this.bestTimeDrpDwn.selectOption("Evening");
        await expect(this.bestTimeDrpDwn).toHaveValue("Radio-2");
    }
}