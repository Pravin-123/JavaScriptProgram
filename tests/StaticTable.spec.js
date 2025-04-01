import { test, expect } from "@playwright/test";

test('Handle Inner Frame', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //const table =await page.locator("//table[@id='productTable']")
    //find table column of the table
    const totalColumn = await page.locator("//table[@id='productTable']/thead/tr/th")
    //Assertion on Column
    expect(await totalColumn.count()).toBe(4)
    console.log("Total Column :", await totalColumn.count());
    //find table rows of the table
    const totalRows = await page.locator("//table[@id='productTable']/tbody/tr")
    //Assertion on Row
    expect(await totalRows.count()).toBe(5)
    console.log("Total row :", await totalRows.count());

    //Or

    const table = await page.locator("//table[@id='productTable']")
    const totalcol = await table.locator("//thead/tr/th") //table[@id='productTable'] + //thead/tr/th
    console.log("total cols", await totalcol.count());
    const totalRow = await table.locator("//tbody/tr");
    console.log("total rows: ", await totalRow.count());

    //Select single product checkbox

    const matchedRow = totalRows.filter({
        has: page.locator("//td"),
        hasText: 'Laptop'
    })
    await matchedRow.locator("//input").check()




    //select runtime product name
    async function selectProduct(totalRows, page, productName) {

        const matchedRow = totalRows.filter({
            has: page.locator("//td"),
            hasText: productName
        })
        await matchedRow.locator("//input").check()
    }

    // await selectProduct(totalRows,page,'Smartphone')
    // await selectProduct(totalRows,page,'Tablet')
    // await selectProduct(totalRows,page,'Wireless Earbuds')


    //select allthe checkbox
    await selectAllCheckboxes(page);
    async function selectAllCheckboxes(page) {
        const chk = await page.locator("//table[@id='productTable']/tbody/tr/td/input[@type='checkbox']").all();
        for (const checkbox of chk) {
            await checkbox.check();
        }
        console.log("all the checkboxes selected");

    }

    //print all the product  details using for loop
    for (let i = 0; i < await totalRows.count(); i++) {
        const row = totalRows.nth(i);
        const tds = row.locator("//td")
        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent());


        }
        console.log("***************************");

    }

    //print all values from web table and click on pagination
    const allPages = await page.locator("//ul[@class='pagination']/li/a")
    console.log("pagination size is :", await allPages.count());
    for (let p = 0; p < await allPages.count(); p++) {
        if (p > 0) {
            await allPages.nth(p).click()
            await page.waitForTimeout(2000);
        }
        for (let i = 0; i < await totalRows.count(); i++) {
            const row = totalRows.nth(i);
            const tds = row.locator("//td")
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
    }
        await page.waitForTimeout(8000)
    });