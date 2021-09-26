const { chromium } = require('playwright');

(async() => {
    // function code
		
  	// launching browser
    const browser = await chromium.launch({ headless:false , slowMo:400 });
  	// creating a page inside browser
  	const page = await browser.newPage();
   	// navigating to site
    await page.goto('https://demoqa.com/automation-practice-form');

		// print the element state

		const firstName = await page.$('#firstName')
		const sportsCheck = await page.$('#hobbies-checkbox-1')		
		const submitBtn = await page.$('#submit')

		console.log(await firstName.isDisabled()) //false
		console.log(await firstName.isEditable()) //true
		console.log(await firstName.isEditable()) //true
		console.log(await sportsCheck.isChecked()) //false
		console.log(await sportsCheck.isVisible()) //true
		console.log(await submitBtn.isHidden()) //false
		console.log(await submitBtn.isVisible()) //true

  	// closing browser
    await browser.close();
  
})();