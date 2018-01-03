window.onload = function(){
    var canvas = document.getElementById("canvas");
    canvas.width = 1024;
    canvas.height = 568;
    var context = canvas.getContext("2d"); 
    //绘制状态
    context.lineWidth = 3; //线条宽
    context.strokeStyle = "#005588"; //样式
    //线条
    // context.beginPath();
    // context.moveTo(100,100);
    // context.lineTo(500,500);
    // context.lineTo(100,500);
    // context.lineTo(100,100);

    // //绘制
    // context.stroke(); //用于绘制线条
    // context.closePath(); 
    // context.fillStyle = "rgb(2,100,30)";
    // context.fill();

    //圆形
    for(var i=0;i<10;i++){
        context.beginPath();
        context.arc(50+i*100,60,40,0,2*Math.PI*(i+1)/10);
        context.closePath();
        context.stroke();
        //context.fill();
    }
}