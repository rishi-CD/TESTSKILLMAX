import { Page, expect } from '@playwright/test';

export class OrganizationActions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToCreationPage() {
    // await this.page.goto('https://sandbox.skillsmax.ai/');
    // await this.page.locator('//input[@placeholder="Email"]').fill(email);
    // await this.page.locator('//input[@placeholder="Password"]').fill(password);
    await this.page.locator('//button[@type="submit"]').click()
    await expect(this.page.locator('//h6[text()="Organization"]')).toBeVisible({timeout:30000});
    await this.page.locator('//p[text()="Organization"]').click();
    (await this.page.waitForSelector('//button[text()="Create Organization"]')).click();
  }

   async fillOrganizationName(name : string = "rishi"){
    await this.page.locator('//*[@id="«r18»"]').fill(name);
  }

  async fillAddress(address: string = "18 palanisamy compount kovalan nager main road") {
    await this.page.locator('xpath=/html/body/div[2]/div[3]/div[1]/div[2]/div/div[2]/textarea[1]').fill(address);
  }

  async selectCountry(country : string){
    await this.page.locator('//*[@id="«r19»"]').click();
    await expect(this.page.locator('//*[@id="«r19»-option-100"]')).toBeVisible({timeout:30000});
    await this.page.locator('//*[@id="«r19»-option-100"]').click();
  }
  async selectstate(state : string){
    await this.page.locator('//*[@id="«r1c»"]').click({ timeout: 60000 });
    await expect(this.page.locator('//*[@id="«r1c»-option-30"]')).toBeVisible({timeout:30000});
    await this.page.locator('//*[@id="«r1c»-option-30"]').click();
  }

  async fillPincode(pincode: string = "625003" ) {
    await this.page.locator('//*[@id="«r1f»"]').click();
    await this.page.locator('//*[@id="«r1f»"]').fill(pincode);
  }
  async selectcity(city : string){
    await this.page.locator('//*[@id="«r1g»"]').click();
    await this.page.locator('//*[@id="«r1g»-option-148"]').click();
  }
  async selectAssessmentlevel(level : string) {
      await this.page.locator('xpath=/html/body/div[2]/div[3]/div[1]/div[2]/div/div[8]/div/div[1]/span/input').click();
    }
  async clickButton() {
    await this.page.locator('xpath=/html/body/div[2]/div[3]/div[2]/div/div/button[2]/p').click();
  }

  async verifySuccessMessage(message:string) {
    await expect(this.page.locator('//div[text()="Organization created successfully!"]'))
      .toBeVisible({timeout:30000});
  }
  async verifyerrorMessage(){
    await expect(this.page.locator('xpath= /html/body/div[2]/div[3]/div[1]/div[2]/div/div[1]/div[2]')).toBeVisible({timeout:30000});
  }

}



