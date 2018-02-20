function printRange(rangeStart, rangeStop) {
  var text = "";
  for (var i = rangeStart; i <= rangeStop; i++) {
    text += i + ',';
  }

  return text.slice(0, -1);
}

document.write(printRange(0, 10));

***

int size = input;
for (i=0; i<size; i++){
   for (j=0; j<size; j++){
       // output a single "*" here
   }
   // output a new line here
}

var integer = '15401'
    primearray = [],
    isPrime;

// find divisors starting with 2
for (i=2; i <= integer; i++){
  if (integer % i==0) {}
}

//find divisors starting with 2

for(i = 2; i <= integer; i++){
  if (integer % i==0) {

    //check if divisor is prime
    for(var j = 2; j <= i/2; j++) {
      if(i % j == 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }

    //if divisor is prime

    if (isPrime == true) {
      //divide integer by prime factor & factor store in array primeArray
      integer /= i
      primeArray.push(i);
    }
  }
}

for (var k = 0; k < primeArray.length; k++) {
  console.log(primeArray[k]);
}

function factors(number)
