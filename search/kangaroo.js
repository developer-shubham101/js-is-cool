/* function kangaroo(x1, v1, x2, v2) {
    if (v1 > v2 && (x2 - x1) % (v1 - v2) === 0) {
        return "YES";
    } else {
        return "NO";
    }  
} */



function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2) {
    return 'NO';
  }
  if (v1 == v2 && x1 < x2) {
    return 'NO';
  }

  while (true) {
    x1 = x1 + v1;
    x2 = x2 + v2;
    if (x1 > x2) {
      return 'NO';
    }
    if (x1 == x2) return 'YES';
  }
}






console.log(kangaroo(0,3,4,2)); //43, 2, 70, 2
