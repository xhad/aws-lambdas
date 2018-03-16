'use strict';

const expect = require( 'chai' ).expect

const googleRss = require( '../index' )

describe( 'GoogleRss function tests', function() {

    it('should search google for rss keyword', done => {

        const event = {
            "keyword": "test"
        }
        const context = {}

        const callback = function (error, result) {
            expect(result.length).to.be.greaterThan(1)
            done()
        }

        googleRss.handler(event, context, callback)
    }) 
})