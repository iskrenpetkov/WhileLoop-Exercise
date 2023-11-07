function maxNumber(input) {
    let index=0;
    
    let num=input[index]
    index++;
let max=Number.MAX_SAFE_INTEGER;

    while (num!=="Stop") {
       let num1=Number(num)
       if (num1<max) {
        max=num
       }
       num=input[index]
       index++
    }
console.log(max);



}
maxNumber(["100",

"99",

"80",

"70",

"Stop"])