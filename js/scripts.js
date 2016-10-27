$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("#inputNumber").val();
    var outputString = checker(inputNumber);
    $("#output").text(outputString);
  });
});
/////////////////

var romans = [["I", "V"], ["X", "L"], ["C", "D"], ["M", ""]];

var checker = function(inputString) {
  var outputString = "";
if (parseInt(inputString) > 3999) {
  var multiple = Math.floor(parseInt(inputString)/ 3999);
  var remainder = parseInt(inputString) % 3999;
  for (i=0; i< multiple; i++){
    outputString += "MMMCMXCIX + ";
  }

  outputString += converter(remainder.toString());
  }
  else {
    outputString = converter(inputString);
  }
  return outputString;
}
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
  else if (number === "9") {
    resultArray.push(romans[ind][0]+romans[ind+1][0]);
  }
  else if (number>5) {
    resultArray.push(romans[ind][1]);
    for (var i = 0; i< parseInt(number)%5 ; i++) {
      resultArray.push(romans[ind][0]);
    }
  }
  else {
    for (var i = 0; i< parseInt(number) ; i++) {
      resultArray.push(romans[ind][0]);
    }
  }
  return resultArray.join("");
}
