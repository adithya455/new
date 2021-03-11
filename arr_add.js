var a=document.getElementById("apple")
var btn=document.getElementById("click")
var arr=[]
function sum(){
    var b=parseInt(a.value)
    arr.push(b)
    console.log(arr)
}
btn.onclick=sum