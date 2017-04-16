import { ChaosMessengerPage } from './app.po';

describe('chaos-messenger App', function() {
  let page: ChaosMessengerPage;

  beforeEach(() => {
    page = new ChaosMessengerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
