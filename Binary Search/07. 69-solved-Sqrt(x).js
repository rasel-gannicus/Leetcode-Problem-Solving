
/* 
69. Sqrt(x)

#Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1

*/


function dummy(num) {
    if(num==0){
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    let start = 1;
    let end = num / 2;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if ((mid * mid) == num) {
            return mid;
        } else if ((mid * mid) < num) {
            start = mid + 1;
        } else if ((mid * mid) > num) {
            end = mid - 1;
        }
    }
    // console.log(mid * mid);
    if ((mid * mid) < num) {
        return mid;
    } else {
        return (mid-1) ;
    }
}

console.log(dummy(5));