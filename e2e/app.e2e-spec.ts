import { BCCollectionPage } from './app.po';

describe('bc-collection App', () => {
  let page: BCCollectionPage;

  beforeEach(() => {
    page = new BCCollectionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
