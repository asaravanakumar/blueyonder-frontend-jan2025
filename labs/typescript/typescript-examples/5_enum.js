"use strict";
//Enums are just restricted to hold numbers
// Enums usually prefered to have constants
var myContactNumbers;
(function (myContactNumbers) {
    myContactNumbers[myContactNumbers["personal"] = 2353453425] = "personal";
    myContactNumbers[myContactNumbers["official1"] = 453452345] = "official1";
    myContactNumbers[myContactNumbers["official2"] = 453454] = "official2";
})(myContactNumbers || (myContactNumbers = {}));
let personalNum = myContactNumbers.personal; // we can use it. but not reset
console.log(personalNum);
//another example
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["INVALID_USERNAME"] = 1001] = "INVALID_USERNAME";
    ErrorCode[ErrorCode["INVALID_PASSWORD"] = 1002] = "INVALID_PASSWORD";
    ErrorCode[ErrorCode["ACCOUNT_DISABLED"] = 1003] = "ACCOUNT_DISABLED"; // this will have the value 1003
})(ErrorCode || (ErrorCode = {}));
console.log("Error Occured. " + ErrorCode.INVALID_USERNAME + ": It seems you have entered invalid username");
console.log(ErrorCode.ACCOUNT_DISABLED);
