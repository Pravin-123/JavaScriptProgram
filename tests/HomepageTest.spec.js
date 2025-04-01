//const {test, expect} =require('@playwright/test');
import{test,expect} from '@playwright/test';
const { log } = require('console');
test('Home Page', async ({page})=>{
await page.goto('https://www.demoblaze.com/');
const pageTitle=await page.title();
console.log('page title is:',pageTitle);
await expect(page).toHaveTitle('STORE');
const pageUrl=await page.url();
console.log('page URL is :',pageUrl);
await expect(page).toHaveURL('https://www.demoblaze.com/');
await page.close();



})