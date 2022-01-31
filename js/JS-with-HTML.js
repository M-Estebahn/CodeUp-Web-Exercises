"use strict";

// alert("Hello World!");
// // use "cmd /" for quick line comment
//  let userChoice=confirm('are you sure you want to leave this page?');
//  console.log (userChoice)
// if (userChoice) {
//     alert("too bad")
// } else{
//     alert("Sweet, Hang out a while!")
let currentSpeed = Number(prompt("how fast are you driving now?"));

 let plannedSpeedIncrease = Number(prompt("how many more mph do you want to go?"));
 let newSpeed= currentSpeed+plannedSpeedIncrease
 console.log('Your planned speed is ' + newSpeed + 'mph');
// console.log("your planned speed is " + (currentSpeed + plannedSpeedIncrease)+'mph')

let distanceLeft = Number(prompt('how many miles left until you reach your destination'));

let timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;
let timePlannedSpeed = (distanceLeft/newSpeed) * 60;
let timeGain = (timeAtCurrentSpeed- timePlannedSpeed);
alert('If you drive at ' + newSpeed + 'mph, you will arrive ' + timeGain.toFixed(2) + ' minutes sooner.');