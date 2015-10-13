$(function(){
  var height = parseFloat(prompt("What is your height in feet/inches?"));

  if (height >= 5.5) {
    $("#awesome").show();
  } else {
    $("#okay").show();
  };


});
