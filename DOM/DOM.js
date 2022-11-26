

var childDiv=document.getElementById("header");
var mainDiv=document.getElementsByClassName("center")[0];
var navigation=document.getElementById("navigation");
var myCloneImg=childDiv.firstElementChild.cloneNode(true);

mainDiv.appendChild(myCloneImg);

var ulist=document.getElementById("nav");

ulist.style.listStyleType="circle";

var img=childDiv.firstElementChild;
img.style.float="right";
img.style.marginTop="-30px";

myCloneImg.style.marginTop="330px"
myCloneImg.style.marginLeft="-700px"


navigation.style.position="absolute";
navigation.style.top="280px";
navigation.style.right="600px"








