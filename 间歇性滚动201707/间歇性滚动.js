
var area = document.getElementById('course_list');
area.scrollTop=0
var liHeight=24;
var time;
var delay=2000;
var speed=50;
area.innerHTML+=area.innerHTML;//克隆一份一样的内容
function startScroll(){
    time=setInterval("scrollUp()",speed);
     area.scrollTop++;
}

function scrollUp(){
    if(area.scrollTop % liHeight==0){
        clearInterval(time);
        setTimeout(startScroll,delay)
    }else{
        area.scrollTop++;
    if(area.scrollTop>=area.scrollHeight/2){
     area.scrollTop=0;
    }
}
    
}
setTimeout(startScroll,delay)

