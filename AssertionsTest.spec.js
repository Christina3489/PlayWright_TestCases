const {test,expect} = require('@playwright/test')

test('Assertions',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')

    //1) await expect(page).toHaveURL()	Page has a URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2) await expect(page).toHaveTitle()	Page has a title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')


    //3) expect(locator).toBeVisible()	Element is visible
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //4) await expect(locator).toBeEnabled()	Element is enabled
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()

    //5) await expect(locator).toBeChecked()	Checkbox is checked
    //radio button
    const radioElement = page.locator('#gender-male')
    await radioElement.click()
    await expect(radioElement).toBeChecked()

    //checkbox
    const checkboxElement = page.locator('#Newsletter')
    await expect(checkboxElement).toBeChecked()

    //6) await expect(locator).toHaveAttribute()	Element has a DOM attribute
    const regButton = await page.locator('#register-button')
    expect(regButton).toHaveAttribute('type','submit') 

    //7) await expect(locator).toHaveText()	Element matches text
    await expect(page.locator('.page-title h1')).toHaveText('Register')

    //8)) await expect(locator).toContainText()	Element contains text
    await expect(page.locator('.page-title h1')).toContainText('Re')

    //9) await expect(locator).toHaveValue(value)	Input has a value
    const emailInput  = await page.locator('#Email')
    await emailInput.fill('abc@gmail.com')
    await expect(emailInput).toHaveValue('abc@gmail.com')
    
    //10) await expect(locator).toHaveCount()	List of elements has given length
    const option = await page.locator('select[name="DateOfBirthMonth"] option')
    await expect(option).tohaveCount(13)






})

