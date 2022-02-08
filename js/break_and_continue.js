'use strict'


for(var i=0;i<10;i++) {
    var userOddNumber = prompt('Please give me an odd number between 1-50')
    if (userOddNumber % 2 !== 0 && userOddNumber > 1 && userOddNumber < 50) {
        console.log('Number to skip is ' + userOddNumber)
        break;
    }
}



var trackedNumber=1

while(trackedNumber<=50){
        let placeHolder= Number(userOddNumber)

        if (trackedNumber === placeHolder) {
            console.log('Yikes! skipping number: ' + placeHolder)
            trackedNumber += 2
      continue;  }

            console.log('here is an Odd Number '+trackedNumber)
        trackedNumber +=2
}

