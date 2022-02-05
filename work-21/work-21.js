var pad = new Image();


pad.jpg = "pad.jpg"


var display = document.getElementById('display');

function press(x){
    display.value += x;
}

function del(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value)
}