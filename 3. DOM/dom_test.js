//////event listeners
document.querySelector('#bait').addEventListener('click',function(){
    console.log('Anonymus function');
});
document.querySelector('#bait2').addEventListener('click',myFun);
function myFun(){
    console.log('Callback function');
}
var myEvent = document.querySelector('#clickMe');
myEvent.addEventListener('click',function() {
    console.log('Marees');
});
//myEvent.myParam = 'Marees';

var myEvent2 = document.querySelector('#clickMe');
myEvent2.addEventListener('dblclick',function() {
    console.log('Marees waran');
});
//myEvent2.myParam = 'Marees waran';

var myEvent3 = document.querySelector('.square');
myEvent3.addEventListener('mousemove',callFun);

//window.addEventListener('mousemove',callFun);

var myEvent3 = document.querySelector('.square');
myEvent3.addEventListener('mouseout',clrFun);
myEvent3.addEventListener('wheel',callScroll);


function callFun(){
    document.querySelector('#mouseMove').innerHTML = 'Inside Square';
    console.log('Mouse moving');
}
function clrFun(){
    document.querySelector('#mouseMove').innerHTML = 'Not inside square';
    clrScroll();
    console.log('Mouse out');
}
function callScroll(){
    document.querySelector('#mouseScroll').innerHTML = 'Mouse Scrolling';
    console.log('Mouse scroll');
}
function clrScroll(){
    document.querySelector('#mouseScroll').innerHTML = 'Not Scrolling';
    console.log('Mouse not scroll');
}
