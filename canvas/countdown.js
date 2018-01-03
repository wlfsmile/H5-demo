var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 568;
var r = 8;
var MARGIN_LEFT = 30;
var MARGIN_TOP = 60;

//截止时间
const endTime = new Date(2018,0,3,22,30,00);
var curShowTimeSeconds = 0;

window.onload = function(){
    var canvas = document.getElementById("canvas");
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    var context = canvas.getContext("2d"); 
    curShowTimeSeconds = getCurrentShowTimeSeconds();
    setInterval(function(){
        render(context);
        update();
    },50)
}

function getCurrentShowTimeSeconds(){
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret/1000);

    return ret >= 0? ret : 0;
}

function update(){

    var nextShowTimeSeconds = getCurrentShowTimeSeconds();

    var nexth = parseInt(nextShowTimeSeconds/3600);
    var nextm = parseInt((nextShowTimeSeconds - nexth*3600)/60);
    var nexts = nextShowTimeSeconds%60;

    var curh = parseInt(curShowTimeSeconds/3600);
    var curm = parseInt((curShowTimeSeconds - curh*3600)/60);
    var curs = curShowTimeSeconds%60;

    if(nexts != curs){
        curShowTimeSeconds = nextShowTimeSeconds;
    }
}

function render(cxt){

    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);

    var h = parseInt(curShowTimeSeconds/3600);
    var m = parseInt((curShowTimeSeconds - h*3600)/60);
    var s = curShowTimeSeconds%60;
    //h
    renderDight(MARGIN_LEFT,MARGIN_TOP,parseInt(h/10),cxt);
    renderDight(MARGIN_LEFT+15*(r+1),MARGIN_TOP,parseInt(h%10),cxt);
    renderDight(MARGIN_LEFT+30*(r+1),MARGIN_TOP,10,cxt);
    //m
    renderDight(MARGIN_LEFT+39*(r+1),MARGIN_TOP,parseInt(m/10),cxt);
    renderDight(MARGIN_LEFT+54*(r+1),MARGIN_TOP,parseInt(m%10),cxt);
    renderDight(MARGIN_LEFT+69*(r+1),MARGIN_TOP,10,cxt);
    //s
    renderDight(MARGIN_LEFT+78*(r+1),MARGIN_TOP,parseInt(s/10),cxt);
    renderDight(MARGIN_LEFT+93*(r+1),MARGIN_TOP,parseInt(s%10),cxt);
}

function renderDight(x,y,num,cxt){

    cxt.fillStyle = "rgb(0,102,153)";
    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j] == 1){
               cxt.beginPath();
                cxt.arc(x+j*2*(r+1)+(r+1),y+i*2*(r+1)+(r+1),r,0,2*Math.PI); 
                cxt.closePath();
                cxt.fill();
                //cxt.stroke(); 
            }
            
        }
    }
}