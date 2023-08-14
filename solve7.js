// 7. Bubble sort algioritmidan foydalanib massivni tartiblang.  arr = [9, 4, 12, 0, 5, 74]


function bubbleSort(arr) {
    var len = arr.length;
    var isSwapped;
  
    do {
      isSwapped = false;
  
      for (var i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          isSwapped = true;
        }
      }
  
      len--;
    } while (isSwapped);
  
    return arr;
  }
  
  var arr = [9, 4, 12, 0, 5, 74];

  // example 

  
  console.log(bubbleSort(arr)); // Output: [0, 4, 5, 9, 12, 74]