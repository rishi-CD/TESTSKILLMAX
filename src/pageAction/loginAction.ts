import { Page, expect } from '@playwright/test';

export class LoginActions {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async navigateToLoginPage() {
        await this.page.goto('https://sandbox.skillsmax.ai/');
    }
    async enterCredentials(email: string = "rishibala.kanthavel@crystaldelta.com", password: string = "Rishi5521@") {
        await this.page.locator('//input[@placeholder="Email"]').fill(email);
        await this.page.locator('//input[@placeholder="Password"]').fill(password);
    }
    async clickLoginButton() {
        await this.page.locator('//button[@type="submit"]').click();
    }

    async verifySuccessfulLogin() {
       await expect(this.page.locator('//h6[text()="Organization"]')).toBeVisible({timeout:30000});
    }
    async wrongCredentials(email: string = "gvkdsjvagka@sdvsv.csd", password: string = "csndvA@") {
        await this.page.locator('//input[@placeholder="Email"]').fill(email);
        await this.page.locator('//input[@placeholder="Password"]').fill(password);
    }
    async verifyErrorMessage() {
    await expect(this.page.locator('//p[text()="Incorrect email or password"]')).toBeVisible({timeout:30000});
  }
   
}

 
