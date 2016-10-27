$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("#inputNumber").val();
    var outputString = converter(inputNumber);
    $("#output").text(outputString);
  });
});
/////////////////

var ones = ["I", "V"];
var tens = ["X", "L"];
var hundreds = ["C", "D"];
var thousands = ["M", ""]
var romans = [ones, tens, hundreds, thousands];

var converter = function(number) {
  var inputArray = (number.split("")).reverse();
  var result= [];

  for (var i=0; i<inputArray.length; i++) {
    result.push(replace(inputArray[i], i));
  }
  return (result.reverse()).join("");
};

var replace = function(number, ind){
  var resultArray = [];
  if (number === "4") {
    resultArray.push(romans[ind][0]+romans[ind][1]);
  }
  else if (number === "5") {
    resultArray.push(romans[ind][1]);
  }
  else if (number<9 && number>5) {
    resultArray.push(romans[ind][1]);
    for (var i = 0; i< parseInt(number)%5 ; i++) {
      resultArray.push(romans[ind][0]);
    }
  }
  else if (number === "9") {
    resultArray.push(romans[ind][0]+romans[ind+1][0]);
  }
  else {
    for (var i = 0; i< parseInt(number) ; i++) {
      resultArray.push(romans[ind][0]);
    }
  }
  return resultArray.join("");
}
