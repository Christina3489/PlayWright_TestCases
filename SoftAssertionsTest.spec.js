const {test,expect} = require('@playwright/test')

test('Soft Assertions', async({page})=>{

    await page.goto('https://demoblaze.com/');

    //Hard asssertions
    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveURL('https://demoblaze.com/')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()


})