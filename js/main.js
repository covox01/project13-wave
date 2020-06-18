var wave1 = wavify(document.querySelector('#wave1'), {
   height: 200,
   bones: 8,
   amplitude: 30,
   color: 'rgba(200, 200, 200, .8)',
   // speed: .25
})

var wave2 = wavify(document.querySelector('#wave2'), {
   height: 100,
   bones: 5,
   amplitude: 50,
   color: 'rgba(255, 255, 255, .8)',
   // speed: .0
})

var wave3 = wavify(document.querySelector('#wave3'), {
   height: 50,
   bones: 3,
   amplitude: 50,
   color: 'rgba(255, 255, 255, .3)',
   // speed: .25
})


// TweenMax.ticker.addEventListener("tick", colorTicker);

// function colorTicker(){
//    gradient = Math.floor(Math.random() * 2) + .5
// }


