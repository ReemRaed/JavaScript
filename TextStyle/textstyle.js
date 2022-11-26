//Element.style.property(camelCase)=value

//radio.style.backgroundColor=value



function ChangeFont()
{
    var txtp=document.getElementById("PAR");
    var radioFont=document.getElementsByName("Font");
        if(radioFont[0].checked)
        {
            txtp.style.fontFamily="normal";
        }
        else if(radioFont[1].checked)
        {
            txtp.style.fontFamily="courier";
        }
        else if(radioFont[2].checked)
        {
            txtp.style.fontFamily="georgia";
        }
        else if(radioFont[3].checked)
        {
            txtp.style.fontFamily="impact";
        }
        else if(radioFont[4].checked)
        {
            txtp.style.fontFamily="times new roman";
        }
        else
        {
             txtp.style.fontFamily="verdana";
        }


}

function ChangeAlign()
{
    var txtp=document.getElementById("PAR");
    var radioFont=document.getElementsByName("Align");
        if(radioFont[0].checked)
        {
            txtp.style.textAlign="normal";
        }
        else if(radioFont[1].checked)
        {
            txtp.style.textAlign="center";
        }
        else if(radioFont[2].checked)
        {
            txtp.style.textAlign="right";
        }
        else
        {
            txtp.style.textAlign="justify";
        }
}


function ChangeHeight()
{
      var txtp=document.getElementById("PAR");
      var radioFont=document.getElementsByName("Height");
            if(radioFont[0].checked)
          {
              txtp.style.height="normal";
          }
         else if(radioFont[1].checked)
          {
              txtp.style.height="10px";
          }
          else if(radioFont[2].checked)
          {
              txtp.style.height="15px";
          }
          else 
          {
              txtp.style.height="1.5px";
          }

}



function ChangeLSpace()
{
    var txtp=document.getElementById("PAR");
    var radioFont=document.getElementsByName("Lspace");
        if(radioFont[0].checked)
        {
            txtp.style.letterSpacing="0";
        }
       else if(radioFont[1].checked)
        {
            txtp.style.letterSpacing="-1px";
        }
        else if(radioFont[2].checked)
        {
            txtp.style.letterSpacing="2px";
        }
        else 
        {
            txtp.style.letterSpacing="3px";
        }
}


function ChangeIndent()
{
      var txtp=document.getElementById("PAR");
      var radioFont=document.getElementsByName("Indent");
      if(radioFont[0].checked)
      {
        txtp.style.textIndent="none";
      }
     else if(radioFont[1].checked)
      {
          txtp.style.textIndent="5px";
      }
      else if(radioFont[2].checked)
      {
        txtp.style.textIndent="15px";
    }
      else 
      {
        txtp.style.textIndent="25px";
    }

}


function ChangeTransform ()
{
    var txtp=document.getElementById("PAR");
    var radioFont=document.getElementsByName("Transform");
      if(radioFont[1].checked)
      {
          txtp.style.textTransform="capitalize";
      }
      else if(radioFont[2].checked)
      {
        txtp.style.textTransform="uppercase";
    }
      else 
      {
        txtp.style.textTransform="lowercase";
    }
   
}

function ChangeDecorate()
{

        var txtp=document.getElementById("PAR");
        var radioFont=document.getElementsByName("Decorate");
       if(radioFont[0].checked)
        {
        txtp.style.textDecoration="none";

        }
        else if(radioFont[1].checked)
        {
            txtp.style.textDecoration="line-through";
        }
        else if(radioFont[2].checked)
        {
            txtp.style.textDecoration="overline";
        }
        else 
        {
            txtp.style.textDecoration="underline";
        }
}

               
                

function ChangeBorder()
{
     var txtp=document.getElementById("PAR");
     var radioFont=document.getElementsByName("Border");
    if(radioFont[0].checked)
     {
     txtp.style.borderStyle="none";

     }
     else if(radioFont[1].checked ||radioFont[2].checked )
     {
         txtp.style.borderStyle="dotted";
     }
     else if(radioFont[3].checked)
     {
         txtp.style.borderStyle="double";
     }
     else if(radioFont[4].checked)
     {
         txtp.style.borderStyle="groove";
     }
     else if(radioFont[5].checked)
     {
         txtp.style.borderStyle="dashed";
     }
     else if(radioFont[5].checked)
     {
         txtp.style.borderStyle="insert";
     }
     else if(radioFont[5].checked)
     {
         txtp.style.borderStyle="outset";
     }
     else 
     {
         txtp.style.borderStyle="ridge";
     }
}

             

function ChangeBorderColor()

{
    var txtp=document.getElementById("PAR");
     var radioFont=document.getElementsByName("BorderColor");
    if(radioFont[0].checked)
     {
     txtp.style.borderColor="black";
     }
     else if(radioFont[1].checked )
     {
        txtp.style.borderColor="pink";
    }
     else if(radioFont[2].checked)
     {
        txtp.style.borderColor = "red";
    }
     else if(radioFont[3].checked)
     {
        txtp.style.borderColor="green";
    }
    else if(radioFont[4].checked)
    {
       txtp.style.borderColor="blue";
   }
    else if(radioFont[5].checked)
    {
       txtp.style.borderColor="yellow";
   }
   else 
   {
      txtp.style.borderColor="purple";
  }
   
}