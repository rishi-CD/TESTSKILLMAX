import { Page, expect } from '@playwright/test';

export class CreationAction {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async navigateTouserCreationPage() {
    await this.page.locator('//button[@type="submit"]').click()
    await expect(this.page.locator('//p[text()="Organization"]')).toBeVisible({timeout:30000});
    // await this.page.locator('//p[text()="User"]').click();
    (await this.page.waitForSelector('//button[text()="Create User"]')).click();
  } 
  async bulkusercreation(){
    await this.page.locator('xpath= /html/body/div[2]/div[3]/div[1]/div[2]/div/div[2]/span/input').click();
    await this.page.locator('//p[text()="Next"]').click();
  }
  async chooseorganisation(){
    await this.page.locator('//*[@id="organization-select"]').click();
    await this.page.locator('//*[@id="organization-select-option-15"]').click();
    await this.page.locator('//input[@type="file"]').setInputFiles('asserts/bulk-sample-user.csv')
    await this.page.locator('//p[text()="Next"]').click();
    await this.page.locator('//p[text()="Next"]').click();
  }
  async verificationandnext(){
    await this.page.locator('//p[text()="Next"]').click();
    await this.page.locator('//button//child::p[text()="Confirm & Create"]').click();

  }
  async successmessege(){
    await expect(this.page.locator('xpath=/html/body/div/section/div/div/div[1]/p')).toBeVisible({timeout:30000});
  }
  async wrongchoosefile(){
    await this.page.locator('//*[@id="organization-select"]').click();
    await this.page.locator('//*[@id="organization-select-option-15"]').click();
    await this.page.locator('//input[@type="file"]').setInputFiles('asserts/wrong-sample.csv');
    await this.page.locator('//p[text()="Next"]').click();
  }
  async errormessege(){
    await expect(this.page.locator('//p[text()="Your file contains errors"]')).toBeVisible({timeout:30000});
    
  }


  }