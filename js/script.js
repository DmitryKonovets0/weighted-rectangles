let canvas = document.getElementById('canvas'), // поиск документа в html
    ctx = canvas.getContext('2d'),  // стиль рисовки
    num = [10,10,10,10,10,10,10,10,10,10], // Проценты котораый занимает один блок цвета
    colors = ['red', 'orange', 'yellow', 'green', 'blue']; //цвета которые в дальнейшем будут идти безперерывно подряд
    offset = 0; // пустая переменная которая возьмет в себя num
function draw() {
    for (let i = 0; i < num.length; i++){
        ctx.fillStyle = colors[i];
        ctx.fillRect(0,offset,200,num[i]); // можно прописать один раз и код будет производить столько раз сколько понадобиться
        offset += num[i];       // код принимает значения num и отсуп идет с 0
    }
}draw();


