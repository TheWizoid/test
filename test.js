"use strict";
function printfunction(){
  document.writeln(arg_amount(arguments));
  switch(arguments.length){
    case 0:
      document.writeln("nice!");
      break;
    default:
      for(var i=0;i<arguments.length;i++){
        document.writeln(arguments[i] + " ")
      }
  }
}
function arg_amount(){
  return arguments[0].length;
}
printfunction("a","b","c","adfadsf")
alert("eyup!!!!!!!!")
