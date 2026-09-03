const { test, expect } = require("@playwright/test");
import leaveManagementApiPage from "../../pageObjects/api/leaveManagementAPI";
import loginPage from "../../pageObjects/ui/login";

test.describe('Orange Hrm Leave Management Api Tests', () => {

    test('My Leave API Test Cases', async ({ request, page}) => {
        const loginObj= new loginPage(page);
        let leaveApiObj = new leaveManagementApiPage(request);
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await loginObj.login('admin','admin123');
        const response=await leaveApiObj.getMyLeaves();
        expect(response.status()).toBe(200);
    });
});
