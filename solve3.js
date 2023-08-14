// 3. Berilgan sonning faktorialini hisoblash funksiyasini yozing. N sonining faktoriali 1 dan N gacha bo‘lgan sonlar ko‘paytmasi. Masalan: N = 4 bo‘lsa. 1 * 2 * 3 * 4 = 24 natija 24 ga teng bo‘ladi.


function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  // example
  console.log(factorial(4)); // Output: 24