const puppeteer = require('puppeteer');
async function getTokoPedia(){
    const browser = await puppeteer.launch({ headless: false }); // for test disable the headlels mode,
    const page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 926 });
    await page.goto("https://www.walmart.com/search/?query=bluetooth",{waitUntil: 'networkidle2'});

    console.log("start evaluate javascript")
    /** @type {string[]} */
    var productNames = await page.evaluate(()=>{
        var div = document.querySelectorAll('.search-result-gridview-item');
        console.log(div) // console.log inside evaluate, will show on browser console not on node console
        
        var productnames = [] 
        div.forEach(element => { 
            var titleelem = element.querySelector('[data-type="itemTitles"]');
            if(titleelem != null){
                productnames.push(titleelem.textContent);
            }
        });

        return productnames
    })

    console.log(productNames)
    browser.close()
} 


getTokoPedia();