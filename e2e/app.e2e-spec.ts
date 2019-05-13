import { BmiCalculatorPage } from './app.po';

describe('bmi-calculator App', () => {
  let page: BmiCalculatorPage;

  beforeEach(() => {
    page = new BmiCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
