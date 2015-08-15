var expect = require('chai').expect;
var helloworld = require('../lib/helloworld');
var messages = require('../lang/messages');

describe('helloworld()', function () {

  it('throws an error if a non string is passed', function () {
    expect(function () {
      helloworld(true);
    }).to.throw('You must provide a language key string!')
  });

  it('returns the english version by default', function () {
    expect(helloworld()).to.equal(messages.en);
  });

  it('returns the english version if the given language cant be found', function () {
    expect(helloworld('ge')).to.equal(messages.en);
  });

  it('returns english when requesting en', function () {
    expect(helloworld('en')).to.equal(messages.en);
  });

  it('returns english when requesting en', function () {
    expect(helloworld('es')).to.equal(messages.es);
  });

  it('returns english when requesting en', function () {
    expect(helloworld('fr')).to.equal(messages.fr);
  });


});
