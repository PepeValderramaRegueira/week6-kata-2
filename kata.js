const findMissingLetter = array => {
  let lowercase = true
  let englishAlphabet = "abcdefghijklmnopqrstuvwxyz";

  let arrayLength = array.length
  array = array.join("")

  let firstStringCharacter = array[0]

  // Check if the array is upper or lowercase
  if (array.charCodeAt(0) >= 33 && array.charCodeAt(0) <= 90) {
    lowercase = false
  }

  firstStringCharacter = firstStringCharacter.toLowerCase()
  array = array.toLowerCase()
  
  let position = englishAlphabet.indexOf(firstStringCharacter)
  let substring = englishAlphabet.substr(position, arrayLength)
  
  array = array.split("")
  substring = substring.split("")

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] !== substring[i]) {
      return lowercase ? substring[i] : substring[i].toUpperCase()
    }
  }
}

console.log(findMissingLetter(['a','b','c','d','f']))
