const puppeteer = require('puppeteer');
let browser

async function setupbrowser() {
    try {
        console.log("Settign browser up")
        browser = await puppeteer.launch({
            headless: false,
            executablePath: '/opt/homebrew/bin/chromium',
            userDataDir: './test'
    })
        const page = await browser.newPage();

        var navigationPromise
        navigationPromise = page.waitForNavigation()

        await page.goto('https://discord.com/channels/786152400544202803/786152400544202805')

        await navigationPromise

        await page.setViewport({ width: 1440, height: 659 })

        await page.waitForSelector('[aria-label="Message #general"]')
        
        for(var i=1; i<20; i++) {
            await timeout(5000)
            await page.type('[aria-label="Message #general"]', "test" + random())
            await page.type('[aria-label="Message #general"]', String.fromCharCode(13))
            await page.type('[aria-label="Message #general"]', "dschg" + random())
            await page.type('[aria-label="Message #general"]', String.fromCharCode(13))

            await page.type('[aria-label="Message #general"]', "edwc" + random())
            await page.type('[aria-label="Message #general"]', String.fromCharCode(13))
            await timeout(random())
            await page.type('[aria-label="Message #general"]', String.fromCharCode(13))
        }
        
        console.log("Done")
    } catch (e) {
        console.log(e)
    }

}



setupbrowser()

function random() {
    return 1000 + parseInt(Math.random() * 1000)
}

function timeout(ms = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}