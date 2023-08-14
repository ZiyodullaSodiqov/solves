// 1. FizzBuzz funksiyasi Agar input 3 ga bo‘linsa Fizz qaytarsin, 5 ga bo‘linsa buzz qaytarsin, 3 ga ham 5 ga ham bo‘linsa FizzBuzz qaytarsin, 3 ga ham 5 ga ham bo‘linmasa inputning o‘zini qaytarsin, agar input son bolmasa “son emas” degan satr qaytsin.


function fizzbuzz(num) {
  if (isNaN(num)) {
    return "not a number";
  } else if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

