
function sumofNaturalNumbers(num) {
    return num*(num+1)/2;
} 
console.log(sumofNaturalNumbers(5));  // Output: 15



function sumofdigits(num){
    let sum = 0;
    while(num > 0) {
        sum += num % 10; 
        num = Math.floor(num / 10);
}
return sum;

}

console.lof(sumofdigits(1287));  // Output: 18


function count(num){
    num = Math.abs(num);
    let count = 0;
    do{
        count++;
        num = Math.floor(num / 10);
    } while(num > 0);
    return count;
}
console.log(count(-1)) // Output: 1
console.log(count(-1234567890)) // Output: 10 */

 