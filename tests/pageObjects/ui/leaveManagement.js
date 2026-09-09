const { expect } = require("@playwright/test");
export default class LeaveManagementPage {
    constructor(page) {
        this.page=page;
        this.leaveSideNav=page.getByRole('link', { name: 'Leave' });
        this.leaveHeading=page.getByRole('heading', { name: 'Leave', exact: true });
        this.applyLink=page.getByRole('link', { name: 'Apply' });
        this.applyLeaveHeading=page.getByRole('heading', { name: 'Apply Leave' });
        this.leaveTypeDropdown=page.getByText('-- Select --');
        this.leaveTypeOption1=page.getByText('CAN - Personal'|'US - Bereavement');
        this.fromDate=page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first();
        this.toDate=page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1);
        this.commentBox=page.locator('textarea');
        this.applyButton=page.getByRole('button', { name: 'Apply' });
        this.successMessage=page.getByText('Success').first();

        // My Leave Locators
        this.myLeaveLink=page.getByRole('link', { name: 'My Leave' });
        this.leaveStatusDropdown=page.locator('div').filter({ hasText: /^Select$/ }).first();
        this.clearStatus=page.locator('.oxd-icon.bi-x.--clear').first();
        //this.clearStatus1 = page.locator('.oxd-grid-4 > div:nth-child(3)')
        this.scheduledStatus=page.getByRole('listbox').getByText('Scheduled');
        this.leaveTypeDropdown=page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2);
        //this.leaveTypeOption1=page.getByRole('option', { name: 'US - Bereavement' });
        this.myLeaveSearchButton=page.getByRole('button', { name: 'Search' });
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
    async myLeave(){
       await this.myLeaveLink.click();
       await this.selectDates('2026-01-01', '2026-31-12');
    
        await this.clearStatus.click();
       await this.leaveStatusDropdown.click();
       await this.scheduledStatus.click();
       await this.leaveTypeDropdown.click();
       await this.leaveTypeOption1.click();
       await this.myLeaveSearchButton.click();

    }
}