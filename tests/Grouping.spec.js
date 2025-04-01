import { test, expect } from "@playwright/test";
import { log } from "node:console";

test.beforeAll(async()=>{
    console.log('this is beforeAll hook..... ');
    
})

test.afterAll(async()=>{
    console.log('this is afterAll Hook ....');  
})

test.beforeEach(async()=>{
    console.log('this is beforeEach hook....');
    
})

test.afterEach(async()=>{
    console.log('this is afterEach Hook');
    
})

//if we want execute only Group 1
test.describe.only('Group 1', () => {
    test('Test1', async ({ page }) => {
        console.log('test1');

    });

    test('Test2', async ({ page }) => {
        console.log('test2');
    });
})

test.describe('Group 2', () => {
    test('test 3', async ({ page }) => {
        console.log('test3');
    })
    test('Test4', async ({ page }) => {
        console.log('test4');
    });
})
