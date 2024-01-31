window.onload = function(){
    let canvas = document.getElementById('chess');
    let context = canvas.getContext("2d");
    let whiteSquare = '#f5c98d';
    let blackSquare = '#754300';

    let x = 0;
    let y = 0;
    let chessBoardWidth = 800;
    let chessBoardHeight = 800;
    let square = chessBoardWidth / 8;

    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            if ((i + j) % 2 == 0 ) {
                context.fillStyle = whiteSquare;
             } else {
                context.fillStyle = blackSquare;
             }
             context.fillRect(
                x + square * (i - 1),
                y + square * (j - 1),
                square,
                square
            );
        }
    }
}