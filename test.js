function even(num) {
  let even = [];
  for(let i = 2; i <=50; i++) {
    if( i % 2 === 0) {
      even.push(i);
    }
  }  return even;
}

even()