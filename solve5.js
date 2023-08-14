    // 5. Binar qidiruv algoritmidan foydalanib berilgan massivda kiritlgan N soni bor yoki yo‘qligini tekshiruvchi dastur tuzing. arr = [54, 14, 27, 32, 80, 11, 36, 48]

function binarySearch(arr, n) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === n) {
        return true;
      } else if (arr[mid] < n) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  }
  
  let arr = [54, 14, 27, 32, 80, 11, 36, 48];
  let n = 27;

  
  console.log(binarySearch(arr, n)); // Output: true