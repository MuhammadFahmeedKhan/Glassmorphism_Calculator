var screen = document.getElementById('screen');

function btn_text(value){
    screen.value += value;
}

function equal(){
    if(screen.value==""){
        screen.placeholder="Enter Value Here";
        setTimeout(()=>{
        screen.placeholder="";
        },3000)
        }
        else{
            screen.value=eval(screen.value);
        }
}

function clr(){
    screen.value="";
}

function back(){
    screen.value= screen.value.slice(screen.length, -1);
}