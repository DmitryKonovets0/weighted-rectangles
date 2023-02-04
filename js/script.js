let num = [20,20,20,20,20];
// let indent = [];
// function calc(a,b,c,d,e){
//     return a + b + c + d + e;
// }calc();
function draw(){
    for(let i = 0; i < 4; i++){
        // indent[i] = num[i];
        // calc(num[0] + num[1] + num[2] + num[3] + num[4]);
    }
    let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
        ctx.fillStyle = 'red';
        ctx.fillRect(0,0,100,num[0]);
        ctx.fillStyle = 'orange';
        ctx.fillRect(0,num[0],100,num[1]);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(0,num[1]+num[0],100,num[2]);
        ctx.fillStyle = 'green';
        ctx.fillRect(0,num[2]+num[1]+num[0],100,num[3]);
        ctx.fillStyle = 'blue';
        ctx.fillRect(0,num[3]+num[2]+num[1]+num[0],100,num[4]);
}draw();