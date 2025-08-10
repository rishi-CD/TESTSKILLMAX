import { Page, expect } from '@playwright/test';

export class OrganizationActions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToCreationPage(email: string = "rishibala.kanthavel@crystaldelta.com", password: string = "Rishi5521@") {
    await this.page.goto('https://sandbox.skillsmax.ai/');
    await this.page.locator('//input[@placeholder="Email"]').fill(email);
    await this.page.locator('//input[@placeholder="Password"]').fill(password);
    await this.page.locator('//button[@type="submit"]').click()
    await expect(this.page.locator('//h6[text()="Organization"]')).toBeVisible({timeout:30000});
    await this.page.locator('//p[text()="Organization"]').click();
    (await this.page.waitForSelector('//button[text()="Create Organization"]')).click();
  }

   async fillOrganizationName(name : string = "rishi"){
    await this.page.locator('//input[@placeholder="Organizatio Name"]').fill(name);
  }

  async fillAddress(address: string = "18 palanisamy compount kovalan nager main road") {
    await this.page.locator('//input[@rows=3]').fill(address);
  }

  async selectCountry() {
    await this.page.locator('/html/body/div[2]/div[3]/div[1]/div[2]/div/div[3]/div/div/div/div/button[2]/svg').click();
    await this.page.locator(`//*[@id="«r19»-option-100"]`).click();
  }
  async selectstate(){
    await this.page.locator('/html/body/div[2]/div[3]/div[1]/div[2]/div/div[4]/div/div/div/div/button/svg').click();
    await this.page.locator(`//*[@id="«r1c»-option-30"]`).click();
  }

  async fillPincode(pincode: number = 625003 ) {
    await this.page.locator('input[name="pinCode"]').fill(pincode.toString());
  }
  async selectcity(){
    await this.page.locator('/html/body/div[2]/div[3]/div[1]/div[2]/div/div[6]/div/div/div/div/button[2]/svg').click();
    await this.page.locator('//*[@id="«r1g»-option-148"]').click();
  }
  async selectAssessmentleve() {
      await this.page.locator(`/html/body/div[2]/div[3]/div[1]/div[2]/div/div[8]/div/div[1]/span/input`).click();
    }
  async clickButton() {
    await this.page.locator(`//p[text()="Create"]`).click();
  }

  async verifySuccessMessage() {
    await expect(this.page.locator('//div[text()="Organization created successfully!"]'))
      .toBeVisible({timeout:30000});
  }

}