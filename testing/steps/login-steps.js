import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await expect(page).toHaveURL(/\/login/);
});


Given('I am logged in', async ({ page }) => {
    // Försöker gå direkt till profilsidan.
    // Om auth.setup.js har fungerat och auth.json har laddats in korrekt,
    // ska användaren redan vara inloggad och få komma åt sidan.
    await page.goto('http://localhost:5173/profile');
    await expect(page).toHaveURL(/\/profile/);

    const token = await page.evaluate(() =>
        localStorage.getItem('isAuthenticated')
    );

    expect(token).toBeTruthy();
});

When('I log in with email {string} and password {string}', async ({ page }, email, password) => {
    await page.getByLabel("email").fill(email);
    await page.getByLabel("password").fill(password);
    await page.getByRole('button', { name: "log in" }).click();
});


Then('I should be redirected to the profile', async ({ page }) => {
    const token = await page.evaluate(() =>
        localStorage.getItem('isAuthenticated')
    );

    expect(token).toBeTruthy();
    await expect(page).toHaveURL(/\/profile/); 
});