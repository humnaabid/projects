var hour=0;
var min=0;
var sec=0;
var mili=0;
var hourhead= document.getElementById("hour")
var minhead= document.getElementById("min")
var sechead= document.getElementById("sec")
var milihead= document.getElementById("mili")
function timer(){
    mili++
    milihead.innerHTML= mili;
    if(mili>=100){
        sec++
        sechead.innerHTML=sec;
        mili=0;
    }

        if(sec>=60){
            min++
            minhead.innerHTML= min ;
            sec=0;  
        }
        if(min>=60){
        hour++
        hourhead.innerHTML=hour;
        min=0;
    }

}
function start(){
interval =setInterval(timer,10)
document.getElementById("start").disabled = true|false;

}
function pause(){
    clearInterval(interval)
    document.getElementById("start").disabled = false;
}
function reset(){
    minhead.innerHTML=0;
    sechead.innerHTML=0;
    milihead.innerHTML=0;
    hourhead.innerHTML=0;
    pause()
}

