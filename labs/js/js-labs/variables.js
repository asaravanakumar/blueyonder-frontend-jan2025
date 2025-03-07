/* Variables
=============
 * Variables are containers for storing data
 * Variables are identifiers, so each variable will/should have different name
 * Variables names should start with alphapets, _, $ and lowerCamelCase 
 * Variable can have data of any type (such as string, number, boolean or object or anything )

 * Reserved words cant be created as variables
   ex: var for = 'testing';
*/

// string
// number
// boolean
// object

// undefined
// null

var x; //undefined;
console.log(x);
var y = null; // Null
console.log(y);
var course = "JS Training"; // string -> 16 bits unicode -> 2 bytes
console.log(course);
var year = 2024; // number -> 64 bits -> 8 bytes
console.log(year);
var isExperiencedTrainer = true; // boolean
console.log(isExperiencedTrainer);
var profile = { //object with property and value
  fullName: "Saravana K",
  city: "Bengaluru",
};
console.log(profile);

console.log(typeof profile);
