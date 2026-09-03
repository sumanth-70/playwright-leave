export default class loginPage {
    constructor(page) {
        this.page=page;
        this.usernameTextBox=page.getByRole('textbox', { name: 'Username' });
        this.passwordTextBox=page.getByRole('textbox', { name: 'Password' });
        this.loginButton=page.getByRole('button', { name: 'Login' });
        this.dashboardHeading=page.getByRole('heading', { name: 'Dashboard' });
    //     this.usernameTextBox = page.locator('input[name="username"]');
    //     this.passwordTextBox= page.locator('input[name="password"]');
    // this.loginButton = page.locator('input[name="password"]');
    }

    async login(username, password) {
        await this.usernameTextBox.fill(username);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
    }
}

