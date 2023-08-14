// 4. N gacha bo‘lgan fibonachchi sonlari ketma-ketligini qaytaruvchi funksiya yozing. Fibonachchi ketma-ketligi deb ketma-ketlikda kelgan bitta sonning qiymati o‘zidan oldin kelgan 2 ta sonning yig’indisiga teng bo‘ladi.

function fibonacciSequence(n) {
    let sequence = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      let nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
  
    return sequence;
  }

  // example
  console.log(fibonacciSequence(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]