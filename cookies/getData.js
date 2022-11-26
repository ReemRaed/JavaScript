var userName , nameValue;
var userAge , ageValue;
var fem , fvalue;
var but = document.getElementById('btn');
but.addEventListener("click", function(){
    window.open("info.html" , "_self" );
    
})

var dat = new Date();
var m = dat.getMonth();
document.getElementById('name').onfocus = function(){
    userName = document.getElementById('name').value;
    nameValue = document.getElementById('name').id;
    setCookies(nameValue , userName , dat);
};

document.getElementById('age').onfocus = function(){
    userAge = document.getElementById('age').value;
    ageValue = document.getElementById('age').id;
    setCookies(ageValue , userAge , dat);
};

function GetGenderValue() {
    var genderRadio = document.getElementsByName('gender');
    if(genderRadio[0].checked==true)
        setCookies("gender",'male',dat);
    if(genderRadio[1].checked==true) 
    setCookies("gender",'female',dat);
   }

var opt = document.getElementById("color");
var idx = opt.selectedIndex;
if(idx == 0){
    setCookies("favcolors" , "red" , dat);
}

else if(idx == 1){
    setCookies("favcolors" , "blue" , dat);
}
else{
    setCookies("favcolors" , "brown" , dat);
}

var Counter=0;
setCookies('Counter',0,6);
   function welcome(){
        var space = document.getElementById("welc");
        var col = getCookies("favcolors");
        if(col == 'red'){
        space.innerHTML = "welcome " +"<h1 style = 'color: red;'>"+ getCookies("name")+"</h1>";
        }
        else if(col == 'blue'){
            space.innerHTML = "welcome " +"<h1 style = 'color: blue;'>"+ getCookies("name")+"</h1>";
         }
         else{
            space.innerHTML = "welcome " +"<h1 style = 'color: brown;'>"+ getCookies("name")+"</h1>";
         }
        
        if(getCookies("gender") === 'male')
            {
                var img = document.getElementById("imagsex");
                img.src = "images/1.jpg";
              
            }
        else{
                var img = document.getElementById("imagsex");
                img.src = "images/2.jpg";
              
        }

        setCookies('Counter',parseInt(getCookies('Counter'))+1,5);
        var element=document.createElement("p");
        element.textContent="Youe Session number = "+getCookies('Counter');
        var container=document.getElementById("im");
        container.appendChild(element);
   }


