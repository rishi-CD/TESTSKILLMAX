import { Page} from '@playwright/test';

export class Utilities {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async ULnavigateTouserCreationPage(email: string = "rishibala.kanthavel@crystaldelta.com", password: string = "Rishi5521@") {
    await this.page.goto('https://sandbox.skillsmax.ai/');
    await this.page.locator('//input[@placeholder="Email"]').fill(email);
    await this.page.locator('//input[@placeholder="Password"]').fill(password);
  }

}
