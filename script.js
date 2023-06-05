// Do the below programs in anonymous function & IIFE

let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let palindromeArray = ["the", "term", "derived", "from", "Greek", "word", "palin", "and", "dromo", "it's", "example", "are" , "civic", "madam", "radar", "deified"];

// Print odd numbers in an array

(function() {
    let oddNumbersArray = [];
  for (i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      oddNumbersArray.push(arr[i])
    }
  } console.log(oddNumbersArray)
})();

let oddNumbersFunc = function (){
    let oddNumbersArray = [];
    for (i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
          oddNumbersArray.push(arr[i])
        }
      } console.log(oddNumbersArray)
}

oddNumbersFunc();

// Convert all the strings to title caps in a string array

let titleArray = ["welcome", "to", "javascript", "tutorials"];

(function (){
    for (i = 0; i < titleArray.length; i++) {

      let titleCaps = titleArray[i].toUpperCase()

    console.log(titleCaps)
    }
  }
)();

let titleCapsFunc = function (){
    for (i = 0; i < titleArray.length; i++) {

        let titleCaps = titleArray[i].toUpperCase()
  
      console.log(titleCaps)
      }
};

titleCapsFunc();

// Sum of all numbers in an array

(function (){
      let sum = 0;
      for (i = 0; i <= arr.length; i++) { 
        sum = sum +i
      }
      console.log(sum)
    }
  )();

  let sumOfArrayFunc = function(){
    let sum = 0;
    for (i = 0; i <= arr.length; i++) { 
      sum = sum +i
    }
    console.log(sum)
  }

  sumOfArrayFunc();

// Return all the prime numbers in an array

let primeArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(){
primeArray = primeArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(primeArray);

})();

let primeArrayFunc = function(){
    primeArray = primeArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
    });

    console.log(primeArray);
}
primeArrayFunc();

// Return all the palindromes in an array

(function(){
    for (i = 0; i < palindromeArray.length; i++) {
  
      const arrayValues = palindromeArray[i].split('');
      // console.log(arrayValues)
      const reverseArrayValues = arrayValues.reverse();
  
      const reverseString = reverseArrayValues.join('');
      // console.log(reverseString)
      if (palindromeArray[i] == reverseString) {
        console.log(`${palindromeArray[i]} is a palindrome`);
      }
      else {
        console.log(`${palindromeArray[i]} is not a palindrome`);
      }
    }
  })();

  let palindromeFunc = function(){
    for (i = 0; i < palindromeArray.length; i++) {
  
        const arrayValues = palindromeArray[i].split('');
        // console.log(arrayValues)
        const reverseArrayValues = arrayValues.reverse();
    
        const reverseString = reverseArrayValues.join('');
        // console.log(reverseString)
        if (palindromeArray[i] == reverseString) {
          console.log(`${palindromeArray[i]} is a palindrome`);
        }
        else {
          console.log(`${palindromeArray[i]} is not a palindrome`);
        }
      }
  }

  palindromeFunc();

// Return median of two sorted arrays of the same size.

(function(){
	let arr1 = [ 1, 26, 15, 38, 12 ];
	let arr2 = [ 17, 13, 23, 45, 30 ];
  let medianArray = ([...arr1, ...arr2]).sort();
  let median = (medianArray[medianArray.length/2 - 1] + medianArray[medianArray.length/2])/2
  console.log(median);
  })();

  let sortedMedianFunc = function(){
    let arr1 = [ 1, 26, 15, 38, 12 ];
	let arr2 = [ 17, 13, 23, 45, 30 ];
  let medianArray = ([...arr1, ...arr2]).sort();
  let median = (medianArray[medianArray.length/2 - 1] + medianArray[medianArray.length/2])/2
  console.log(median);
  }

  sortedMedianFunc();

// Remove duplicates from an array

let duplicatesInArray = ["1","1","2","8","4","7","6","4","8","2","9","1","2","3"];

let uniqueArray = [];

(function(){
    duplicatesInArray.forEach(element => {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    });
    console.log(uniqueArray);

})();

let uniqueArrayFunc = function(){
    duplicatesInArray.forEach(element => {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    });
    console.log(uniqueArray);
};

uniqueArrayFunc();

// Rotate an array by k times

(function(){
    let input = 3;
    let lenArr = arr.length - input;
    let firstArr = arr.slice(0,lenArr);
    let reversedLastArr = arr.slice(lenArr, arr.length).reverse();
    console.log(reversedLastArr.concat(firstArr));
})();

let rotatedArrayFunc = function(){
    let input = 5;
    let lenArr = arr.length - input;
    let firstArr = arr.slice(0,lenArr);
    let reversedLastArr = arr.slice(lenArr, arr.length).reverse();
    console.log(reversedLastArr.concat(firstArr));
}

rotatedArrayFunc();

// Do the below programs in arrow functions.

// Print odd numbers in an array

let oddNumbers = [];

const oddNumber = () => {
    for (i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        oddNumbers.push(arr[i])
      }
    }
    console.log(oddNumbers)
  }
  
  oddNumber();

// Convert all the strings to title caps in a string array

let stringsToTitleFunc = function (){
    for (i = 0; i < titleArray.length; i++) {

        let titleCaps = titleArray[i].toUpperCase()
  
      console.log(titleCaps)
      }
};

stringsToTitleFunc();

// Sum of all numbers in an array

const arraySumFunc = () => {
    let sum = 0;
    for (i = 0; i <= arr.length; i++) { 
      sum = sum +i
    }
    console.log(sum)
  }

  arraySumFunc();

// Return all the prime numbers in an array

let primeNumbersFunc = () => {
    primeArray = primeArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
    });

    console.log(primeArray);
}
primeNumbersFunc();

// Return all the palindromes in an array

let palindromesArray = () => {

  for (i = 0; i < palindromeArray.length; i++) {

    const arrayValues = palindromeArray[i].split('');
    // console.log(arrayValues)
    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');
    // console.log(reverseString)
    if (palindromeArray[i] == reverseString) {
      console.log(`${palindromeArray[i]} is a palindrome`);
    }
    else {
      console.log(`${palindromeArray[i]} is not a palindrome`);
    }
  }
}
palindromesArray();