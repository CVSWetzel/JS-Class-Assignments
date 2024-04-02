// let text = `Is this
// all there
// is`
// let pattern = /^is/m;
// let result = text.match(pattern);
// console.log(result)

// //Creating a pattern without RegExp Constructor
// //Declaring regular expression with global flag and case insensitive flag.
// let regEx= /love/gi
// let regEx= new RegExp('love','gi')

// //Testing for a matach in a string
// const str = 'I love JavaScript'
// const pattern = /love/
// const result = pattern.test(str)
// console.log(result)


//match():Returns an array containing all of the matches, including 
//capturing groups, or null if no match is found. If we do not use a 
//global flag, match() returns an array containing 
//the pattern, index, input and group.

// const str = 'I love JavaScript'
// const pattern = /love/
// const result = str.match(pattern)
// console.log(result)

// const str = 'I love JavaScript'
// const pattern = /love/g
// const result = str.match(pattern)
// console.log(result)


//search(): Tests for a match in a string. It returns the index of the match, 
//or -1 if the search fails.
const str = 'I love  JavaScript'
const pattern = /love/g
const result = str.search(pattern)


//Replacing a substring
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)
git