var inp=document.getElementById("inp");
var btn=document.getElementById("btn");
var myqr=document.getElementById("myqr");

btn.addEventListener("click",()=>
{
    if(inp.value == " ")
    {
        alert("enter any content");
    }
    else
    {
        myqr.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=paytm=${inp.value}`;

    }
});