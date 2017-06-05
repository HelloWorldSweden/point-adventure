import { HwPointAdventurePage } from './app.po';

describe('hw-point-adventure App', () => {
  let page: HwPointAdventurePage;

  beforeEach(() => {
    page = new HwPointAdventurePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
