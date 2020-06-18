(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// var wavify = require("wavify")

var wave1 = wavify(document.querySelector('#wave1'), {
   height: 200,
   bones: 8,
   amplitude: 50,
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



},{}]},{},[1]);
