let colors = ['red', 'orange', 'yellow', 'green', 'blue'];


// colors[3] * 10;
// console.log(colors);


var repeats = 1000;
var arrayB = Array.apply(null, {length: repeats * colors.length})
        .map(function(e,i){return colors[i % colors.length]});