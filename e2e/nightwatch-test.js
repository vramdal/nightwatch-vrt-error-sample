describe("Admin clickaround", function () {
  this.tags = ["demo"];

  before((browser) => browser.navigateTo("http://localhost:3000"));

  it("Admin", function (browser) {
    browser
      .waitForElementVisible("body")
      .assert.screenshotIdenticalToBaseline("body", "screenshot", {
      baseline_screenshots_path: "vrt/baseline",
      diff_screenshots_path: "vrt/diff",
      screenshotPath: "vrt/screenshots",
    });
  });

  // after(browser => browser.end());
});
