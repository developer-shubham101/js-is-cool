function gradingStudents(grades) {
  var newGrade = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 37) {
      var remain = grades[i] % 5;
      newGrade[i] = (remain >= 3) ? (grades[i] - (remain - 5)) : grades[i];
    } else {
      newGrade[i] = grades[i];
    } 
  }
  return newGrade;
}






console.log(gradingStudents([73, 67, 38, 33, 37])); 