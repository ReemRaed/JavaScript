
var win;
var imageChoseen;
var Radios;

function smallWindow()
{
    Radios=document.getElementsByName("Radio");
    for (var i=0;i<Radios.length;i++)
    {
        if(Radios[i].checked)
        {
            imageChoseen=Radios[i].previousElementSibling.previousElementSibling;
        }
    }
   
    win = window.open("",width=500,height=500);

    var container = win.document.createElement("div");
    container.style.textAlign="center"

    var txt1 = document.getElementsByTagName("textarea")[0].value;

    var p = win.document.createElement("p");
    p.appendChild(win.document.createTextNode(txt1));
    p.style.textAlign="center"
    p.style.margin="20px"

    var newImg = win.document.createElement("img");
    newImg.src = imageChoseen.src;
    newImg.width = "350";

    var btn = win.document.createElement("input");
    btn.type = "submit";
    btn.value = "closePreview";
    btn.style.textAlign="center"
    btn.style.margin="50px"

    btn.onclick=close;

    win.document.body.appendChild(container);
    container.appendChild(newImg);
    container.appendChild(p);
    container.appendChild(btn);
    }


function init()
 {
    var btn = document.getElementById("btn1");
    btn.onclick=smallWindow;
   
}

function close()
{
    win.close();
}

