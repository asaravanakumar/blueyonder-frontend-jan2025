"use strict";
// What if we have a really complex object with so many diff property types?
//example:
let exampleObj = {
    name: "Sanjay",
    zipcode: 560001,
    skills: ["React", "Node"],
    hasExperience: true
};
let exampleObj1 = {
    name: "Kumar",
    zipcode: 560001,
    skills: ["React", "Node"],
    hasExperience: true
};
let exampleObj2 = {
    name: "Kumar",
    zipcode: 560001,
    skills: ["React", "Node"],
    hasExperience: true
};
console.log(exampleObj1);
console.log(exampleObj2);
