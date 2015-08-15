var messages = require('../lang/messages');

/**
 * Returns "Hello World" in different languages based on the given
 * language key or defaults to english if the desired language
 * can not be found.
 *
 * @return {String}
 */
module.exports = function (lang) {

  // throw an error if a non-string is passed
  if (lang && typeof lang !== 'string') {
    throw new Error('You must provide a language key string!');
  }

  // return the english version if no match is found
  return messages[lang] || messages['en'];

}
