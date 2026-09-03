const { expect } = require("@playwright/test");
export default class LeaveManagementPage {
    constructor(page) {
        this.page=page;
        this.leaveSideNav=page.getByRole('link', { name: 'Leave' });
        this.leaveHeading=page.getByRole('heading', { name: 'Leave', exact: true });
        this.applyLink=page.getByRole('link', { name: 'Apply' });
        this.applyLeaveHeading=page.getByRole('heading', { name: 'Apply Leave' });
        this.leaveTypeDropdown=page.getByText('-- Select --');
        this.leaveTypeOption1=page.getByText('CAN - Personal');
        this.fromDate=page.getByRole('textbox', { name: 'yyyy-mm-dd' }).first();
        this.toDate=page.getByRole('textbox', { name: 'yyyy-mm-dd' }).nth(1);
        this.commentBox=page.locator('textarea');
        this.applyButton=page.getByRole('button', { name: 'Apply' });
        this.successMessage=page.getByText('Success').first();
        this.timeOut=page.waitForTimeout(5000);


    }

    async selectLeaveType(){
        await this.leaveTypeDropdown.click();
        await this.leaveTypeOption1.click();
    }

    async selectDates(fromdate, todate){
    await this.fromDate.fill(fromdate);
    await this.toDate.clear();
    await this.toDate.fill(todate);
    }
    async applyLeave(){
        await this.applyLink.click();
        await expect(this.leaveHeading).toBeVisible();
        //await page.waitForTimeout(5000);
        await this.selectLeaveType();
       //await page.waitForTimeout(2000)
       await this.selectDates('2026-09-04', '2026-09-04');
       await this.commentBox.fill('Sick');
       await this.applyButton.click();
       
       await expect(this.successMessage).toBeVisible();
       await this.timeOut;
    }
}