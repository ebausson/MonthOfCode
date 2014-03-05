getRandomColor = function (){
    return "#" + Math.floor(Math.random()*256).toString(16) + Math.floor(Math.random()*256).toString(16) + Math.floor(Math.random()*256).toString(16);
}

createBall = function(canvas){
    var result = {
        color    : getRandomColor(),
        xPos     : Math.floor(Math.random() * canvas.width),
        yPos     : -20,
        diameter : 5 + Math.floor(Math.random() * 15),
        xSpeed   : -5 + Math.random() * 10,
        ySpeed   : 0
    };
    return result;
}


drawBall = function(ctx, ball) {
    ctx.beginPath();
    ctx.fillStyle = ball.color;
    ctx.arc(ball.xPos, ball.yPos, ball.diameter, 0, Math.PI*2, true);
    ctx.fill();
    ctx.closePath();
}

draw = function(ctx, balls){
    ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height );
    for (var i = balls.length - 1; i >= 0 ; i--) {
        var ball = balls[i];
        if (ball.xPos + ball.diameter < 0 || ball.xPos - ball.diameter > ctx.canvas.width) {
            balls.splice(i, 1);
        } else {
            ball.yPos += ball.ySpeed;
            ball.xPos += ball.xSpeed;
            if (ball.yPos > ctx.canvas.height) {
                if (ball.ySpeed < 10) {
                    ball.ySpeed = 10;
                }
                ball.ySpeed = ball.ySpeed * -0.8;
            }
            ball.ySpeed += 1;
            drawBall(ctx, ball);
        }
    }
}

window.onload=function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    var height = canvas.height;

    balls = [];
    var i=0;

    var timer = setInterval( function(){
        if (i >= 10){
            balls[balls.length] = createBall(canvas);
            i = 0;
        }
        i++;
        draw(ctx, balls);
    }, 1000/60 ); //Draw at 15 frames per second
};

