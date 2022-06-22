canvas = document.querySelector("canvas")
var pincel = canvas.getContext('2d');
pincel.fillStyle = '#0A3871';

function desenharetaHorizontal(x, y, width, height) {
    pincel.beginPath();
    pincel.fillRect(x, y, width, height);

}

function desenhaRetaVertical(x, y, width, height) {
    pincel.beginPath();
    pincel.fillRect(x, y, width, height);
}

function desenhaCabeca() {

    pincel.beginPath();
    pincel.arc(303, 70, 40, 0, 2 * Math.PI);
    pincel.fillStyle = "#0A3871"
    pincel.fill()
    pincel.beginPath();
    pincel.arc(303, 70, 35, 0, 2 * Math.PI);
    pincel.fillStyle = "#F3F5FC"
    pincel.fill();
    pincel.fillStyle = "#0A3871"
}

function desenhaMembros(xInicial, yInicial, xFinal, yFinal) {
    pincel.beginPath()
    pincel.moveTo(xInicial, yInicial)
    pincel.lineWidth = 6
    pincel.lineCap = 'butt'
    pincel.lineTo(xFinal, yFinal)
    pincel.strokeStyle = "#0A3871"
    pincel.stroke()

}

function desenhaForca() {
    tamanho = letrasErradas.length
    switch (tamanho) {
        case 0:
            pincel.clearRect(0, 0, 500, 300);
            break
        case 1:
            desenharetaHorizontal(60, 295, 200, 5)
            desenhaRetaVertical(100, 0, 7, 300)
            desenharetaHorizontal(100, 0, 200, 5)
            desenhaRetaVertical(300, 0, 7, 30)
            desenhaRetaVertical(300, 0, 7, 30)
            break;
        case 2:
            desenhaCabeca()
            break;
        case 3:
            desenhaRetaVertical(300, 105, 7, 100)
            break;
        case 4:
            desenhaMembros(303, 120, 270, 180)
            break;
        case 5:
            desenhaMembros(305, 120, 340, 180)
            break;
        case 6:
            desenhaMembros(303, 202, 280, 270)
            break;
        case 7:
            desenhaMembros(305, 202, 328, 270)
            break;

    }
}
