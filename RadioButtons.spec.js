const {test,expect} = require ('@playwright/test')

test('RadioButton', async({page})=>{

    await page.goto("https://itera-qa.azurewebsites.net/home/automation")

    //Radio button

    await page.locator("//input[@value='option2']").check()

    await page.check("//input[@value='option2']")

    await page.locator("//input[@value='option2']").toBeChecked()

    await expect (await page.locator("//input[@value='option2']").isChecked()).toBeTruthy() //male

    await expect (await page.check("//input[@value='option1']").isChecked()).toBeFalsy() //Female


})