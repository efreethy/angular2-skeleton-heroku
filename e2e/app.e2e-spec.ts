import { Angular2SkeletonHerokuPage } from './app.po';

describe('angular2-skeleton-heroku App', () => {
  let page: Angular2SkeletonHerokuPage;

  beforeEach(() => {
    page = new Angular2SkeletonHerokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
