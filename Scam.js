function data(){
  var x1 = document.getElementById("input1").value;
    var x2 = document.getElementById("input2").value;
      var x3 = document.getElementById("input3").value;
        var x4 = document.getElementById("input4").value;

  x1=x1 + "<br>";
x2=x2 + "<br>";
x3=x3 + "<br>";
  x4=x4 + "<br>";
  var z = "<h1> Is This Information Correct? </h1> <div> Date of Birth: "+x1+" Social Security Number: "+x2+"  Bank Routing Number: "+x3+" Address: "+x4+"</div>";

document.getElementById('result').innerHTML = z;
var yb = "<input type = 'button' value = 'YES' onclick = 'yes()'>";
var nb = "<input type = 'button' value= 'NO' onclick = 'no()'>";


document.getElementById ('result2').innerHTML = yb;
document.getElementById ('result3').innerHTML = nb;
}

function yes()
{
  alert ("Haha! It appears you have been scammed. (;");
}

function no()
{
  alert ("Please re-enter your information for it to be verified correctly.");
}
