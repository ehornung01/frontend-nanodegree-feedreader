// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(document).ready(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
    describe('RSS Feeds', function() {

        it('is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('Urls are defined', function() {

            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        it('Names are defined', function() {
            for ( var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    describe("The menu", function() {

        it('is hidden by default', function(){
            expect(document.body.classList).toContain('menu-hidden');
        });

        it(" is opening", function() {
            $('.menu-icon-link').click();
            expect(document.body.classList).not.toContain('menu-hidden');

        });

        it('is closing', function() {
            $('.menu-icon-link').click();
            expect(document.body.classList).toContain('menu-hidden');
        });
   });


// Specs
describe("Initial Entries", function () {


    beforeEach(function (done) {
        loadFeed(0,done);
    });

    it("has at least one entry showing", function () {
        expect($('.feed .entry').length).toBeGreaterThan(0);
    });
});

describe("New Feed Selection", function () {


    beforeEach(function (done) {
        loadFeed(0,function(once){
            entryLink = document.getElementsByClassName('entry-link')[0].innerText;
            loadFeed(1,function(twice){
                exitLink = document.getElementsByClassName('entry-link')[0].innerText;
                done();
            });
        });
    });


     it('is changing the options available', function() {
        expect(entryLink).not.toMatch(exitLink);
        });

});

}());

