
'use strict'
var num=2
while (num<=65536){
    console.log(num)
    num=num+num
}

var allCones = Math.floor(Math.random() * 50) + 50;

do{
    var conesBought=( Math.floor(Math.random() * 5) + 1);


    if(allCones === 0) {
        console.log('Yay! I sold them all');
        break;
    }else if (conesBought > allCones) {
        console.log('I cannot sell you ' + conesBought + ' I only have ' + allCones + ' left',allCones);
        break;
    }else (conesBought < allCones); {
    console.log(conesBought + ' Cones sold',allCones);
    }allCones=allCones-conesBought

} while (allCones>=0)







