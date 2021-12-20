// var calc = function() {  
//     var bill = Number(document.getElementById('bill').value);  
//     var split = Number(document.getElementById('split').value)  
//     var tip = bill * .15;  
//     var totalBill = bill + tip;  
//     var splitPerPerson = totalBill / split  
//     document.getElementById("tip").innerHTML = "₹" + Number(tip).toFixed(2);  
//     document.getElementById("total").innerHTML = "₹" + Number(totalBill).toFixed(2);  
//     document.getElementById("splitTotal").innerHTML = "₹" + Number(splitPerPerson).toFixed(2);
// }

function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
  
    //validate input
    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
  
    //Calculate tip
    var total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }
  
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };