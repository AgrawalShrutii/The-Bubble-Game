var timer=30;
var score=0;
var hitrn=0;


function makeBubble(){
    var clutter="";

for(var i=1;i<=216;i++){

    var num= Math.floor(Math.random()*10)

    clutter+= `<div class="bubble">${num}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
   var timerint= setInterval(function(){

        if(timer>0){
         timer--;
            document.querySelector("#timerval").textContent=timer;
        } else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
    
    } ,1000);

}

function getNewHit(){
  hitrn= Math.floor(Math.random() * 10);
   document.querySelector("#hitval").textContent= hitrn;

}


function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;

}

document.querySelector("#pbtm").addEventListener("click",function (a) {
    
   var clickedNum= Number(a.target.textContent);
   if(clickedNum===hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }
});

makeBubble();
runTimer();
getNewHit();
