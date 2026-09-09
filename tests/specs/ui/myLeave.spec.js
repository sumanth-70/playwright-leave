const { test, expect } = require("@playwright/test");
import loginPage from "../../pageObjects/ui/login";
import LeaveManagementPage from "../../pageObjects/ui/leaveManagement";
const testData = require('../../testData/users.json');

test.describe ('My Leave', ()=> {
    test.beforeEach(async ({ page }) => {
        let loginObj= new loginPage(page);
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await loginObj.login(testData.username, testData.password);
        await page.waitForTimeout(5000);
        await expect(loginObj.dashboardHeading).toBeVisible();
    })

    test('Select valid From/To dates, leave Status, leave type and search.',async ({page})=> {
        let leaveObj= new LeaveManagementPage(page);
        await leaveObj.leaveSideNav.click();
        await expect(leaveObj.leaveHeading).toBeVisible();
        // await leaveObj.myLeaveLink.click();
        await leaveObj.myLeave();
        await leaveObj.timeOut;
    });
})