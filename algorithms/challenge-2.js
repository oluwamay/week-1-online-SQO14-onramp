function fizzBuzz(input){
    if(input % 3 == 0 && input % 5 == 0){
        return "fizzBuzz"
    }else if(input % 5 == 0){
        return "buzz"
    }else if(input % 3 == 0 ){
        return "fizz"
    }else{
        return input
    }
}
//Implement a function fizzBuzz(input) that takes a number and retuns:
// "fizz": if the number is divisible by 3
// "buzz": if the number is divisible by 5
// "fizzbuzz": if the number is both divisible by 3 and 5
// number: if it is not divisible by 3 or 5
module.exports = fizzBuzz
