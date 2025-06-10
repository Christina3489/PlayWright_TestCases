const { test, expect } = require('@playwright/test');

test('Home page title validation', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
});

