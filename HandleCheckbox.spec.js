const {test,expect} = require ('@playwright/test')

test('Handle Check box', async({page})=>{

    await page.goto("https://itera-qa.azurewebsites.net/home/automation")

    await page.locator("//input[@id='Monday' and @type='checkbox']").check()

    await expect ( await page.locator("//input[@id='Monday' and @type='checkbox']")).toBeChecked()

    await expect ( await page.locator("//input[@id='Monday' and @type='checkbox']")).isChecked().toBeTruthy()
    
     await expect ( await page.locator("//input[@id='Sunday' and @type='checkbox']")).isChecked().toBeFalsy()
    

     const checkboxLocators = [
        "//input[@id='Monday' and @type='checkbox']",
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='Saturday' and @type='checkbox']",
     ];

     for(const checkbox of checkboxLocators) //select multiple checkboxes
     {
        await page.locator(checkbox).check() //selected

     }

      await page.waitForTimeout(5000)
      
      for(const checkbox of checkboxLocators) //unselect multiple checkboxes
     {
         if(await page.locator(checkbox).isChecked())
         {
            await page.locator(checkbox).uncheck() //selected
         }
        

     }


})