const {test,expect} = require ('@playwright/test')

test('Drop down', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/')

    //Multiple ways (5) to select option from the dropdowns

   // await page.locator('#country').selectOption({label:'Canada'})  //by using label

    // await page.locator('#country').selectOption('Canada')  //by using  Visible text

    // await page.locator('#country').selectOption({value:'Canada'}) //by using value

    // await page.locator('#country').selectOption({index:1}) // by using index

    await page.selectOption("#country",'Canada') // Directly calling by text


    // Assertions

    //1) Check total number of options in drop down - Approach1
    // const option = await page.locator('#country option')

    // await expect(options).toHaveCount(10)

    //2) Check and print number of options in dropdown - Approach 2
    const options = await page.$$('#country option')
    console.log("Number of options", options.length)

    await expect(options).toBe(10)

    //3)checck presence of element / value in the drop down - Approach 1

     const content  = await page.locator('#country').textContent()
     await expect(content.includes('Canada')).toBeTruthy()

     //4) checck presence of element / value in the drop down - Approach 2

     const textContent = await page.$$("#country",'option')

     let status = false;

     for(const text of textContent){

        let value = text.textContent()
        if(value.includes('France'))
        {
            status = true;
            break;
        }

     }

     expect(status).toBeTruthy()

     //5) Slect option from the dropdown the loop

     const textCon = await page.$$("#country",'option')

     let stat = false;

     for(const text of textContent){

        let value = text.textContent()
        if(value.includes('France'))
        {
            await page.selectOption("#country",value)
            status = true;
            break;
        }

     }
})

    




