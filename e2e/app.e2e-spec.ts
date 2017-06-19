import { CefacPage } from './app.po';

describe('cefac App', () => {
  let page: CefacPage;

  beforeEach(() => {
    page = new CefacPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
