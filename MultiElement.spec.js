const { test, expect } = require('@playwright/test');

test('MultiElement', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');

    const elements = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for (const element of elements) {
        const text = await element.textContent();
        console.log(text);
    }
    // Example assertion
   // expect(elements.length).toBeGreaterThan(0);
});