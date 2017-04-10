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
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        var urlTest = function (index){
            it('Url is defined', function(){
                expect(allFeeds[index].url).toBeDefined();
                expect(allFeeds[index].url.length).not.toBe(0);
            })
        }
           for(i=0; i< allFeeds.length; i++){
                   urlTest(i)
            }

        var nameTest = function (index){
            it('Name is defined', function(){
                expect(allFeeds[index].name).toBeDefined();
                expect(allFeeds[index].name.length).not.toBe(0);
            })
        }
           for(i=0; i< allFeeds.length; i++){
                   nameTest(i)
            }
    });


describe("The menu", function(){

     here = $('.menu-icon-link')
     xy = function (){
        var slider = document.getElementById('slide-menu')
        var leftSlide = slider.getBoundingClientRect().left
        return leftSlide
    }
    beforeEach(function(done){
        feedMenu()
        setTimeout(function(){
        there = xy();
        done()
        },1000)
    })


    it(" is opening", function (){
        expect(there).toEqual(0);
        })

    it('is closing', function(){
        expect(there).toBeLessThan(0)
    })

})

describe('Initial Entries', function(){


    beforeEach(function(done){
        loadFeed(0)
        setTimeout(function(){
            firstLink = document.getElementsByClassName('entry-link')[0].innerText
        done()
        },1000)

    })

    it('are appearing when LoadFeed function is called', function(){
        expect($('.header-title')[0].innerHTML).toMatch('Udacity Blog')
        expect((document.getElementsByClassName('entry-link').length)).toBeGreaterThan(0)
    })

})


describe('New Feed Selection', function(){

     // entryLink = document.getElementsByClassName('entry-link');


    beforeEach(function(done){
        loadFeed(1)
        setTimeout(function(){
            entryLink = document.getElementsByClassName('entry-link')[0].innerText;
        done()
        },1000)
    })

    it('has at least 1 entry within the feed container', function(){
        expect(entryLink).toContain('Let’s Define Exactly What Atomic CSS is')
    })
})

}());

//     it('appears when menu icon is clicked', function (){

//                 var menuIcon = $('.menu-icon-link');
//                 var spyEvent = spyOnEvent(menuIcon, 'click' );
//                 menuIcon.click();
//                 expect( 'click' ).toHaveBeenTriggeredOn( menuIcon );
//                 expect( spyEvent ).toHaveBeenTriggered();
// })




                    // var test = false;
                    // $('.menu-icon-link').on('click', function(){
                    //     if (!test){
                    //         test = true;
                    //     }else{
                    //         test = false
                    //     }
                    // })

                    // if(test){
                    //     var slider = document.getElementById('slide-menu')
                    //     var leftSlide = slider.getBoundingClientRect().left

                    //     expect(leftSlide).toBeGreaterThan(0)
                    // }

                    // if(!test){
                    //     var slider = document.getElementById('slide-menu')
                    //     var leftSlide = slider.getBoundingClientRect().left

                    //     expect(leftSlide).toBeGreaterThan(0)
                    // }




    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */



