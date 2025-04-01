const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginLink = page.locator("//a[@id='login2']");
        this.userName = page.locator("//input[@id='loginusername']");
        this.userPassword = page.locator("//input[@id='loginpassword']");
        this.loginButton = page.locator("//button[normalize-space()='Log in']");
    }

    async gotoLoginPage() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async login(username, password) {
        await this.loginLink.click();
        await this.userName.fill(username);
        await this.userPassword.fill(password);
        await this.loginButton.click();
    }
}

// Export the class
module.exports = { LoginPage };
