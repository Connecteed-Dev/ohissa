const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const url = process.env.URL || 'http://localhost:5176/ohissa-sport';
  const outDir = path.resolve(__dirname);
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  const logs = [];
  page.on('console', msg => {
    try {
      const text = msg.text();
      logs.push(text);
      console.log('PAGE LOG>', text);
    } catch (e) { }
  });

  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

  await page.waitForSelector('.ohissa-products-buttons a', { timeout: 10000 });

  const anchors = await page.$$('.ohissa-products-buttons a');
  console.log('Found anchors:', anchors.length);

  for (let i = 0; i < anchors.length; i++) {
    const a = anchors[i];
    const href = await page.evaluate(el => el.getAttribute('href'), a);
    console.log(`Hovering anchor ${i} -> ${href}`);
    await a.hover();
    await page.waitForTimeout(700);
    const shotPath = path.join(outDir, `hover-${i}.png`);
    await page.screenshot({ path: shotPath, fullPage: false });
    console.log('Saved', shotPath);
  }

  // capture background-image computed style
  const bg = await page.evaluate(() => {
    const el = document.querySelector('.ohissa-products-bg');
    if (!el) return null;
    return window.getComputedStyle(el).backgroundImage;
  });
  console.log('Final computed background-image:', bg);

  await browser.close();
  // write logs file
  try { fs.writeFileSync(path.join(outDir, 'hover-logs.json'), JSON.stringify(logs, null, 2)); } catch(e){}
  process.exit(0);
})();
