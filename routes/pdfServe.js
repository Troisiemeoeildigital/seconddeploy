const puppeteer = require('puppeteer');
const http = require('http');

// Create an instance of the HTTP server to handle the request.
http
	.createServer(async (req, res) => {
		// Set the content type so the browser knows how to handle the response.
		res.writeHead(200, { 'Content-Type': 'application/pdf' });

		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto('http://localhost:3000' ||"https://kitech-crm.onrender.com/");
		// By removing the `path` option, you'll receive a `Buffer` from `page.pdf`.
		const buffer = await page.pdf({ opt });

		await browser.close();

		// You can serve this buffer to the browser directly.
		res.end(buffer);
    })