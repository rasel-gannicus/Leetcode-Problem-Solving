function dummy(arr) {
    let hasPrinted10 = false;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 10 && !hasPrinted10) {
        console.log(arr[i]);
        hasPrinted10 = true;
      } else if (arr[i] !== 10) {
        console.log(arr[i]);
      }
    }
  }
  
  dummy([40, 10, 10, 10, 10, 50, 30]);
  