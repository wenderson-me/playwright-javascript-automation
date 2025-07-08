const { webkit } = require('playwright');

(async() => { 

    const browser = await webkit.launch({ headless:false , slowMo:100 });

  	const page = await browser.newPage();

    await page.goto('https://www.demoqa.com/frames');

		//logic to hadle the iframe
		const frame1 = await page.frame({url: /\/sample/});
		const heading1 = await frame1.$('h1');
		console.log(await heading1.innerHTML());

    await browser.close();
  
})();