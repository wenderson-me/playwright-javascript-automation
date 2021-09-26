const { chromium } = require('playwright');

(async() => {
    // function code
		
  	// launching browser
    const browser = await chromium.launch({ headless:false , slowMo:400 });
  	// creating a page inside browser
  	const page = await browser.newPage();
   	// navigating to site
    await page.goto('https://applitools.com/');

		// take screenshot code
		await page.screenshot({path: 'screenshot.png'})

		// take screenshot element
		const logo = await page.$('.logo')
		await logo.screenshot({path: 'logo.png'})

		//take screenshot all page
		await page.screenshot({path: 'fullpage.png', fullPage: true})

  	// closing browser
    await browser.close();
  
})();