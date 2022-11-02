function fizzBuzz(input){
    if(input % 3 == 0 && input % 5 == 0){
        return "fizzbuzz"
    }else if(input % 5 == 0){
        return "buzz"
    }else if(input % 3 == 0 ){
        return "fizz"
    }else{
        return "not divisible by 3 or 5"
    }
    }


module.exports = fizzBuzz
