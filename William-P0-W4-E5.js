function ubahHuruf(kata) {
  // you can only write your code here!
  var abjad = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var locate = [];
  var baru = "";
  for(i=0; i<kata.length;i++){
    if (kata[i] === "z") {
      locate.push(-1)
    } else {
    for(j=0; j<abjad.length; j++){
      if(kata[i] == abjad[j]){
        locate.push(j);
      }
    }
    }
  }
  for(k=0; k<locate.length; k++){
    baru += abjad[locate[k]+1];
  }
  return baru;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zzuu')); // aavv