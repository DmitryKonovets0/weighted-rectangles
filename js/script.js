function draw(ctx, num, color ) {

    let offset = 0;
    let canvas = document.getElementById('canvas');

    for (let i = 0; i < num.length; i++){
    colors = color[i % color.length];

        ctx.fillStyle = colors;
        ctx.fillRect(0,offset,200,num[i]);
        offset += num[i];
    }
}
draw(
    canvas.getContext('2d'),
    [10,10,10,10,10,10,10,10,10,10],
    ['red', 'orange', 'yellow', 'green', 'blue','darkblue','purple']
);


