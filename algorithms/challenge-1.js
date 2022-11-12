function countTruthy(arr) {
   let falsy = [undefined, null, NaN, 0, "", false]
    count = 0
   for(let i = 0; i < arr.length; i++){
        if(!falsy.includes(arr[i]))
            count++
   }
   return count
}
module.exports = countTruthy