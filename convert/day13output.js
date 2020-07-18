"use strict";

//1
var arr = [1, 2, 3, 4, 5, 5, 6, 4, 7, 3];

var filterArray = function filterArray(arr) {
  var output = arr.filter(function (item) {
    return item > 4;
  });
  console.log(output);
};

filterArray(arr); //2

var array1 = ["Vijendra", "Singh"];
var array2 = ["Singh", "Shakya"];
console.log(array1.concat(array2)); //3

var arr1 = [1, 2, 3];
var arr2 = [2, 3];
var difference = arr1.filter(function (x) {
  return !arr2.includes(x);
}).concat(arr2.filter(function (x) {
  return !arr1.includes(x);
}));
console.log(difference); //4

var array = [1, 2, 3, 4, 5, 6, "taco"];

function reverse(array) {
  return array.map(function (item, idx) {
    return array[array.length - 1 - idx];
  });
}

console.log(reverse(array)); //5

var arr = [1, 2, 3];
var max = arr.reduce(function (a, b) {
  return Math.max(a, b);
});
console.log(max);