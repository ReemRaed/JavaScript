

function setCookies(name , value , expireDate){
    const month = new Date();
    const m = month.getMonth();
    month.setMonth(m + expireDate);
    document.cookie = name +"=" + value +";expires ="+month.toUTCString+";path=/";

}

function getCookies(cookieName){

    var cookies=document.cookie.split(";");
    var cookiesArr=[];
    for(i=0;i<cookies.length;i++){
        var key=(cookies[i].split("=")[0]).trim();
        var val=decodeURIComponent((cookies[i].split("=")[1]));  
        cookiesArr[key]=val;
    }
    return cookiesArr[cookieName];

}

function deleteCookie ()
{
   var cookie=getCookie();
   for(i in cookie)
   {
       document.cookie=i+";expires=1-1-2000";
   }
}


function allCookiesList ()
{
    var allCookies=document.cookie.split(";");

    return allCookies;
}


function hasCookie (cookieName)
{

    if(document.cookie.indexOf(cookieName+"=") !== -1)
    {
        return true;
    }
    return false;

}


