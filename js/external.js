 "use strict"
 console.log("Hello from External JavaScript");

 alert('Welcome to my Website!');

 let userInput=prompt('whats your favorite color?');

 alert('No way! ' + userInput + ' is my favorite color too!');

 let littleMermaid = Number(prompt('How many days did you have The Little Mermaid?')) *3 ;


 let brotherBear = Number(prompt('How many days did you have Brother Bear?')) *3;

 let hercules = Number(prompt('How many days did you have Hercules?'))*3;

 alert('You owe $'+ (hercules+brotherBear+littleMermaid));

 let googlePay = Number(prompt('How many hours did you work for Google?'))* 400;

 let amazonPay= Number(prompt('How many hours did you work for Amazon?'))* 380;

 let faceBookPay=Number(prompt('How many hours did you work for Facebook?'))*350;

 alert('This check should be $'+(amazonPay+googlePay+faceBookPay));

let classNotFull=confirm('is there space in the class?');

let noScheduleConflict=confirm('Is your Schedule clear?');

let canEnrollInClass=(classNotFull && noScheduleConflict);
alert('it is '+canEnrollInClass +' you can enroll in class')

let premiumMember=confirm('Is this a premium member?');

let moreThanTwoItems= confirm("Are there more than two items?");

let offerNotExpired=confirm('Is the offer still valid');

let applyOffer=(premiumMember || moreThanTwoItems && offerNotExpired);

alert('it is '+applyOffer+' you can apply offer')