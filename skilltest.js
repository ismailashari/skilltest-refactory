console.log("---Largest Number---");
function maxRedigit(num){
  if(Number.isInteger(num) == true && num.length == 3 ){
      return null
  }else{
      let numArray = String(num).split("").map((num) => {
          return Number(num)
      })
      // console.log(numArray)
  
      let biggestSort = numArray.sort((a, b) => b-a)
      // console.log(biggestSort)
  
      let joinArray = biggestSort.join('')
      console.log(joinArray)
  }
}

maxRedigit(123)
maxRedigit(231)
maxRedigit(321)
maxRedigit(-1)
maxRedigit(0)
maxRedigit(1000)


console.log("---Product Array---")
function productArray(arr)
    {
        let n = arr.length;
    
          // Base case
        if (n == 1) {
            console.log(0);
            return;
        }
         
        // Initialize memory to all arrays
        let left = new Array(n);
        let right = new Array(n);
        let prod = new Array(n);
  
        let i, j;
  
        /* Left most element of left array
        is always 1 */
        left[0] = 1;
  
        /* Right most element of right
        array is always 1 */
        right[n - 1] = 1;
  
        /* Construct the left array */
        for (i = 1; i < n; i++)
            left[i] = arr[i - 1] * left[i - 1];
  
        /* Construct the right array */
        for (j = n - 2; j >= 0; j--)
            right[j] = arr[j + 1] * right[j + 1];
  
        /* Construct the product array using
        left[] and right[] */
        for (i = 0; i < n; i++)
            prod[i] = left[i] * right[i];
  
        /* print the constructed prod array */
        for (i = 0; i < n; i++)
            // console.log(prod[i] + " ");
            prod[i] + " ";

            // let arrayProd = []
            // arrayProd.push(prod)
            console.log(prod);

        return;
    }

    productArray([12,20])
    productArray([3,27,4,2])
    productArray([13,10,5,2,9]) 
    productArray([16,17,4,3,5,2])


console.log("---Alternate Case---");

function alternateCase(str) {
    var swap = ''
    for (i = 0; i < str.length; i++) {
      if (str[i] >= 'a' && str[i] <= 'z') {
        swap += str[i].toUpperCase()
      } else {
        swap += str[i].toLowerCase()
      }
    }
    console.log(swap)
  }
  
alternateCase("abc")
alternateCase("ABC")
alternateCase("Hello World")

console.log("---Multiple 3 and 5---")
function solution(number) {    
  let sum = 0;    for(let i=1; i<number; i++) {        
    if(i % 3 === 0 || i % 5 === 0){            
      sum += i;        
    }    
  }    
  console.log(sum);
}
console.log('Multiple 3 and 5')
solution(10); // returns 23 as 3 + 5 + 6 + 9 = 23
solution(20); // returns 78 as 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 = 78