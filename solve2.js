// 2.  Berilgan son palindrom ekanligigni tekshiradigan funksiya yozing. (Polindrom son bu o‘ngdan ham chapdan ham bir xil o‘qiladigan son. Masalan: 101 - polindrom, 2020202 - polindrom, 2021 - polinrom emas)


function isPalindrome(num) {
    if (isNaN(num)) {
      return false;
    }
  
    num = num.toString();
    var left = 0;
    var right = num.length - 1;
  
    while (left < right) {
      if (num[left] !== num[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }