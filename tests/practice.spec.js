import { test, expect } from '@playwright/test'
import {PracticePage} from '../pages/practicePage'

test('Voluteer Sign Up Page Visible', async ({page}) => {

    const volunteerPage = new PracticePage(page)

    await volunteerPage.NavigateToPracticePage()
    await volunteerPage.PracticePageHeaderIsDisplayed();
    
});

test('Complete Volunteer Form', async ({page}) => {

    const volunteerPage = new PracticePage(page)

    await volunteerPage.NavigateToPracticePage()
    await volunteerPage.FillVoluteerForm();
    
});

test.afterEach(async ({ page }) => {
    await page.close();
  });