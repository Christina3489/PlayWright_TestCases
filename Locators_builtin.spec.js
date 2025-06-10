const {test,expect} = require('@playwright/test');
test('Locators_builtin', async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //await page.goto('https://demoblaze.com/index.html');

    const logo = await page.getByAltText('Third slide')

    await expect(logo).toBeVisible()

    await page.getByPlaceholder("Username").fille('Admincad')
    await page.getByPlaceholder("Password").fille('admin123')

    await page.getByRole('button', ({type:"submit"})).click()

    const name = await page.locator('').textContent()
    
    await expect(await page.getByText(name)).toBeVisible()

    await page.getByText('STORE').click()

  


    





});






