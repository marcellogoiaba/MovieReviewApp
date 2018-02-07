import { MovieAppReviewPage } from './app.po';

describe('movie-app-review App', function() {
  let page: MovieAppReviewPage;

  beforeEach(() => {
    page = new MovieAppReviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
