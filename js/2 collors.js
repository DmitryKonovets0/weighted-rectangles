let num = [30,30];
let indent = [];
function draw(){
    for(let i = 0; i < 6; i++){
        indent[i] = num[i];
    }
    let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
        ctx.fillStyle = 'red';
        ctx.fillRect(0,0,100,num[0]);
        ctx.fillStyle = 'orange';
        ctx.fillRect(0,num[0],100,num[1]);
}draw()


