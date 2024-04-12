// main.js

// Function to replace every character in a string with 'x'
function xify(str) {
  let newXifiedString = '';
  for (let i = 0; i < str.length; i++) {
      newXifiedString += 'x';
  }
  return newXifiedString;
}

// Function to add an exclamation point after each character in a string
function yellingChars(str) {
  let yelledString = '';
  for (let i = 0; i < str.length; i++) {
      yelledString += str[i] + '!';
  }
  return yelledString;
}


// Function to add the index of each character before that character in the given string
function indexedChars(str) {
  let indexedString = '';
  for (let i = 0; i < str.length; i++) {
      indexedString += i + str[i];
  }
  return indexedString;
}


// Function to add the number of each character before that character in the given string
function numberedChars(str) {
  let numberedString = '';
  for (let i = 0; i < str.length; i++) {
      numberedString += '(' + (i + 1) + ')' + str[i];
  }
  return numberedString;
}

// Function to change every question mark or period to an exclamation point
function exclaim(str) {
  let exclaimedString = '';
  for (let i = 0; i < str.length; i++) {
      if (str[i] === '?' || str[i] === '.') {
          exclaimedString += '!';
      } else {
          exclaimedString += str[i];
      }
  }
  return exclaimedString;
}


// Function to repeat the given string n times
function repeatIt(str, n) {
  let repeatedString = '';
  for (let i = 0; i < n; i++) {
      repeatedString += str;
  }
  return repeatedString;
}


// Function to shorten a long string to 15 characters plus an ellipsis
function truncate(str) {
  if (str.length > 18) {
      return str.slice(0, 15) + '...';
  } else {
      return str;
  }
}

// Function to create an email from a two-part name
function ciEmailify(name) {
  const lowercasedName = name.toLowerCase();
  const email = lowercasedName.replace(' ', '.') + '@perseverenow.org';
  return email;
}



// Function to reverse the given string
function reverse(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
  }
  return reversedString;
}


// Function to return only the vowels from a word
function onlyVowels(str) {
  const vowels = 'aeiouAEIOU';
  let vowelString = '';
  for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
          vowelString += str[i];
      }
  }
  return vowelString;
}


// Function to return the given string with alternating lower and upper cases
function crazyCase(str) {
  let crazyString = '';
  for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
          crazyString += str[i].toLowerCase();
      } else {
          crazyString += str[i].toUpperCase();
      }
  }
  return crazyString;
}


// Function to return a transformed version of the given string where every word starts with a capital letter
function titleCase(str) {
  let titleString = '';
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
      if (capitalizeNext && str[i] !== ' ') {
          titleString += str[i].toUpperCase();
          capitalizeNext = false;
      } else {
          titleString += str[i].toLowerCase();
          if (str[i] === ' ') {
              capitalizeNext = true;
          }
      }
  }

  return titleString;
}


// Function to return the given string in camel case
function camelCase(str) {
  let camelString = '';

  // Split the string into words
  const words = str.split(' ');

  // Capitalize the first letter of each word after the first one
  for (let i = 0; i < words.length; i++) {
      if (i === 0) {
          camelString += words[i].toLowerCase();
      } else {
          camelString += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      }
  }

  return camelString;
}


// Function to return the given string with alternating lower and upper cases, but without considering spaces
function crazyCase2ReturnOfCrazyCase(str) {
  let crazyString = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
          crazyString += ' ';
      } else {
          if (count % 2 === 0) {
              crazyString += str[i].toLowerCase();
          } else {
              crazyString += str[i].toUpperCase();
          }
          count++;
      }
  }

  return crazyString;
}





 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
