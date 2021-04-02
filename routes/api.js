'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.get('/api/convert', function(req, res){
   console.log(req.query)
  // return req.query
   let inputNum = convertHandler.getNum(req.query.input);
   let inputUnit = convertHandler.getUnit(req.query.input);
   let returnUnit = convertHandler.getReturnUnit(inputUnit);
   let returnNum = convertHandler.convert(inputNum,inputUnit);
   let returnString = convertHandler.getString(inputNum,inputUnit,returnNum,returnUnit)
  // let returnObject = convertHandler.convert(inputNum,inputUnit)
   let outputObject = { initNum: inputNum,initUnit: inputUnit,returnNum: "returnObject",
   returnUnit: returnUnit, string: returnString}
 // return returnObject
   res.json(outputObject)
  })
};
