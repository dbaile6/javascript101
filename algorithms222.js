function steamrollArray(arr) {
  var nmb = [];
  arr.forEach(function(val){
    if(Array.isArray(val))
      nmb = nmb.concat(steamrollArray(val));
    else
      nmb.push(val);
  });

  console.log(nmb);
  return nmb;
}

steamrollArray([1, [2], [3, [[4]]]]);
