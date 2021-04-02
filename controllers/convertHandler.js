function ConvertHandler() {
  
  this.getNum = function(input) {
let regex=/[0-9.]+/
    let result=input.match(regex)[0];
    console.log(result)
    return result;
  };
  
  this.getUnit = function(input) {
    let regex=/[a-zA-Z]+/
    let result =input.match(regex)[0].toLowerCase()
    
    console.log(result)
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
   // let regex;
let result

switch(initUnit) {

case "gal":
result = "L";
break;

case "L":
result = "gal"
break;

case "mi":
result = "km";
break;

case "km":
result ="mi"
break;

case "lbs":
result = "kg";
break;

case "kg":
result = "lbs"
break;
}

  //  let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

  switch(unit) {
  
case "gal":
result = "gallons";

case "L":
result = "liters"

case "mi":
result = "miles";

case "km":
result ="kilometers"

case "lbs":
result = "pounds";

case "kg":
result = "kilograms"

}

    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
   // let unit = initUnit.spellOutUnit()
    let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
    
    return result;
  };
  
}

module.exports = ConvertHandler;
