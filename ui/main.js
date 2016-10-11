console.log('Loaded!');

var element=document.getElementById('main-text');
element.innerHTML='newvalue';

var img=document.getElementById('modi');
var marginLeft=0;
function moveRight (){
    marginLeft=marginLeft+2;
    img.style.marginLeft=marginLeft + 'px';
}

window.onload = function(){
    var interval=setInterval(moveRight, 50);

};