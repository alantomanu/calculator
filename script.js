

function inp(val)
{
    document.getElementById("display").value+=val
   
   }
function cleardisplay(){
    document.getElementById("display").value=''
}
var temp
var a
function addition(hi)
{
    a=1
    temp=document.getElementById("display").value
    cleardisplay()
}
function substraction()
{
    a=2
    temp=document.getElementById("display").value
    cleardisplay()
}
function multiplication()
{
    a=3
    temp=document.getElementById("display").value
    cleardisplay()
}
function division()
{
    a=4
    temp=document.getElementById("display").value
    cleardisplay()
}


function equalclick()
{
    if(a==1){
 var b=document.getElementById("display").value
 var result=parseFloat(temp)+parseFloat(b)
 document.getElementById("display").value=result
    
}
if(a==2){
    var b=document.getElementById("display").value
    var result=parseFloat(temp)-parseFloat(b)
    document.getElementById("display").value=result
}
if(a==3){
    var b=document.getElementById("display").value
    var result=parseFloat(temp)*parseFloat(b)
    document.getElementById("display").value=result
}
if(a==4){
    var b=document.getElementById("display").value
    var result=parseFloat(temp)/parseFloat(b)
    document.getElementById("display").value=result
}}