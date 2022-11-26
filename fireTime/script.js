var button = document.getElementById("btn");

button.addEventListener("click" , function(e){
    var iscontinue = confirm("Do you want to continue submitting");
    if(!iscontinue){
        //console.log("hi");
        event.preventDefault();
    }
   
})

inputs = document.getElementsByTagName("input");

var newEvent = new Event("wait");
document.addEventListener("wait", function () {
    var timeout;
     {

        
        timeout = setInterval(function () {
            if (inputs[0].value == "" && inputs[1].value == "") {
                console.log("hamdaa");
                alert("please enter your data");
            }
            else {
                clearInterval(timeout)
            }
            }, 3000);
    }
    
});

document.dispatchEvent(newEvent);
