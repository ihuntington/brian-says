'use strict';

var expect = require('chai').expect,
    brian = require('../brian-says');

require('mocha');

describe('When the "says" method is called with a String', function () {
    var said;

    beforeEach(function () {
        said = brian.says('abc');
    });

    it('should convert the String to uppercase', function () {
        expect(said).to.be.equal('ABC');
    });
});

describe('When the "says" method is NOT called with a String', function () {
    var said;

    beforeEach(function () {
        said = brian.says({hello: 'world'});
    });

    it('should return with the statement "Completely unacceptable! I only except strings."', function () {
        var assertion = 'Completely unacceptable! I only except strings.'.toUpperCase();
        expect(said).to.be.equal(assertion);
    })
});