import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('test card', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 10,
      devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  describe('test amer card', () => {
    test('should add .cdisabled class for master', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[data-id=div]');
      const input = await form.$('[data-id=inputId]');
      await input.type('371449635398431');
      const submit = await form.$('[data-id=butInputId]');
      submit.click();
      await page.waitForSelector('[data-id=master].cdisabled');
    });
  });
  describe('test amer card', () => {
    test('should add .cdisabled class for master', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[data-id=div]');
      const input = await form.$('[data-id=inputId]');
      await input.type('371449635398430');
      const submit = await form.$('[data-id=butInputId]');
      submit.click();
      await !page.waitForSelector('[data-id=master].cdisabled');
    });
  });
});
