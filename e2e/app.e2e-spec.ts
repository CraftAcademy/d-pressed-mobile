import { Page } from "./app.po";
import { Testability } from "@angular/core";

describe("App", () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe("default screen", () => {
    beforeEach(() => {
      page.navigateTo("/");
    });

    it("should have a title saying D-pressed", () => {
      page.getTitle().then(title => {
        expect(title).toEqual("D-pressed");
      });
    });

    it("fill in form", () => {
      page.fillInForm('pablo@test.com', 'my-password');
    //  expect(page.results_card_content()).toContain('Signed in successfully');
    });
  });
});
