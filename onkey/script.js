document.onkeydown = function (){
    
    if(event.altKey){
        alert("It is alt key");
    }
    else if(event.shiftKey){
        alert("It is shift key");
    }
    else if(event.ctrlKey){
        alert("It is ctrl key");
    }
    else{
        alert(event.which);
    }
}