import { test as setup } from '@playwright/test';

// Här skapar vi ett test som heter "authenticate".
// Vi använder "test as setup" bara för att namnet ska bli tydligare,
// eftersom detta test inte är ett vanligt test utan ett setup-test.
setup('authenticate', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    await page.getByLabel('Email').fill('alice@example.com');
    await page.getByLabel('Password').fill('Secret123!');
    await page.getByRole('button', { name: 'Log in' }).click();

    await page.waitForURL('http://localhost:5173/profile');

    // Sparar nuvarande browser state i filen "testing/auth.json".
    // Där sparas t.ex. localStorage, cookies och annan auth-data
    // som senare kan återanvändas av andra tester.
    await page.context().storageState({ path: 'testing/auth.json' });
});