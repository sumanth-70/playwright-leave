const { test, expect } = require("@playwright/test");
import loginPage from "../../pageObjects/ui/login";
import LeaveManagementPage from "../../pageObjects/ui/leaveManagement";
const testData = require('../../testData/users.json');

test.describe ('Apply Leaves', ()=> {
    test.beforeEach(async ({ page }) => {
        let loginObj= new loginPage(page);
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await loginObj.login(testData.username, testData.password);
        await expect(loginObj.dashboardHeading).toBeVisible();
    })
    test('Select a leave type, valid From/To dates, add a comment, and apply.',async ({page})=> {
        
        let leaveObj= new LeaveManagementPage(page);
        await leaveObj.leaveSideNav.click();
        await expect(leaveObj.leaveHeading).toBeVisible();
    //     await leaveObj.applyLink.click();
    //     await expect(leaveObj.applyLeaveHeading).toBeVisible();
    //     //await page.waitForTimeout(5000);
    //    await leaveObj.selectLeaveType();
    //    await page.waitForTimeout(2000)
    //    await leaveObj.selectDates('2026-04-09', '2026-04-09');
    //    await leaveObj.commentBox.fill('Sick');
    //    await leaveObj.applyButton.click();
       
    //    await expect(page.getByText('Success').first()).toBeVisible();
    //  await page.waitForTimeout(5000);
    await leaveObj.applyLeave();
        
    })
})