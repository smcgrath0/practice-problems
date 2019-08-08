
function sumArray(array){
  var takenArray = array;
  var total = 0;
  for (var i = 0; i < takenArray.length; i++){
    total = total + parseInt(takenArray[i]);
  }
  return total;
}

function fitWithinVal(array, number){
  // var array = [1, 100, 2, 4, 5, 6];
  var total = 0;
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if ((total+array[i]) < number ){
      total = total + parseInt(array[i]);
      console.log(total);
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function getAllNamesShorterThan(nameArray, number){
  return nameArray.filter(name => name.length < number);
}

function makeLabel(input){
  return input.greeting + " " + input.givenName + " " + input.familyName+'\n'+input["home address"].streetNumber + " " + input["home address"].streetName+'\n'+input["home address"].city+ ", " + input["home address"].state + " " +input["home address"].zip
}
