require('./testHelper')
var Browser = require("zombie");
var expect = require("chai").expect;

describe('Einstein', function() {

  before(function(done) {
    browser = new Browser({ site: 'http://localhost:9536' })
    browser.visit('/', done);
  });

  it("should load the page", function() {
    expect(browser.success).to.equal(true);
    expect(browser.text('h1')).to.include('Einstein');
  });

  it("should find people", function() {
    expect(browser.text('h2')).to.include('Ember');
    expect(browser.text('li')).to.include('Hem Brahmbhatt (damnhipster)');
  });

  it("should link to github profiles", function() {
    expect(browser.html('a')).to.include('github.com');
  });

});
