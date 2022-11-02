function calculateGrade(marks) {
  let sum = 0
  for(i = 0; i < marks.length; ++i){
    sum += marks[i]
  }
  let average = sum / marks.length
  if(average <= 100 && average >= 90){
    return 'A'
  } else if(average < 90 && average >= 80){
    return 'B'
  }else if(average < 80 && average >= 70){
    return 'C'
  }else if(average < 70 && average >= 60){
    return 'D'
  }else if(average < 60 && average >= 50){
    return 'E'
  }else if(average < 50 && average >= 0){
    return 'F'
  }else{
    return "NaN"
  }
 }
  module.exports =calculateGrade

