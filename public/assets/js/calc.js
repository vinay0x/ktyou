function myfunction(){
  var e = document.getElementById("sub1");
  var sub1 = e.options[e.selectedIndex].value;

  var e = document.getElementById("sub2");
  var sub2 = e.options[e.selectedIndex].value;

  var e = document.getElementById("sub3");
  var sub3 = e.options[e.selectedIndex].value;

  var e = document.getElementById("sub4");
  var sub4 = e.options[e.selectedIndex].value;

  var e = document.getElementById("sub5");
  var sub5 = e.options[e.selectedIndex].value;

  var e = document.getElementById("sub6");
  var sub6 = e.options[e.selectedIndex].value;

  var e = document.getElementById("lab1");
  var lab1 = e.options[e.selectedIndex].value;

  var e = document.getElementById("lab2");
  var lab2 = e.options[e.selectedIndex].value;

  var e = document.getElementById("elective");
  var elective = e.options[e.selectedIndex].value;

  if(elective=="b"){
    var electiveCredit = 3;
    var totalCredit=24;
  }
  else{
    var electiveCredit = 2;
    var totalCredit=23;
  }

  var creditGpProductSum=(parseInt(sub1)*4)+(parseInt(sub2)*4)+(parseInt(sub3)*4)+(parseInt(sub4)*4)+(parseInt(sub5)*3)+(parseInt(sub6)*electiveCredit)+parseInt(lab1)+parseInt(lab2);

  var sgpa=creditGpProductSum/totalCredit;
  sgpaFloat = parseFloat(sgpa);

  document.getElementById("sgpaPrint").innerHTML = sgpaFloat.toFixed(2);

}
