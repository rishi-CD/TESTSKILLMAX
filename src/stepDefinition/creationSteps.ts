import { Given , When, Then} from '@cucumber/cucumber';
import { page } from '../support/hooks';
import { CreationAction } from '../pageAction/creationAction';

let usercreationAction :  CreationAction


Given('user logged in and on the organization User creation page', async () => {
  usercreationAction = new CreationAction(page);
  // await new Utilities(page).ULnavigateTouserCreationPage();
  await usercreationAction.navigateTouserCreationPage();
});
When ('user choose the create Bulk user and clicks the next button', async()=>{
    await usercreationAction.bulkusercreation();
});
When('user choose the organization name and uploading the csv file',async()=>{
  await usercreationAction.chooseorganisation();
});
When('user verifiy the info and clicks next button and conirm and add the user', async()=>{
  await usercreationAction.verificationandnext();
})
Then('user sees the verification messege',async()=>{
  await usercreationAction.successmessege();
});
When('user choose the organization name and uploading the csv file with same email',async()=>{
  await usercreationAction.wrongchoosefile();
});
Then('user should see an error messege',async()=>{
  await usercreationAction.errormessege();
});
