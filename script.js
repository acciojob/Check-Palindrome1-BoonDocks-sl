// complete the given function

function palindrome(str){
	// convert the input string to lowercase and remove all non-alphanumeric characters
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // reverse the cleaned string and compare it to the original string
  let reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;

}
module.exports = palindrome
