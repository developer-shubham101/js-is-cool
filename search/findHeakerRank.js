function processData(input) {

  var patternOfHackerrank = /[hHaAcCkKeErRrRaAnNkK]{10}/g;

  
  
  var match = input.match(patternOfHackerrank);
  console.log(match.length);
}






(processData(
  `4
I love #hackerrank
I just scored 27 points in the Picking Cards challenge on #HackerRank
I just signed up for summer cup @hackerrank
interesting talk by hari, co-founder of hackerrank`
)); 