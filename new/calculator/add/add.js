var btn=document.getElementById('b')
var ul = document.getElementById('u')
var input =document.getElementById('in')
btn.addEventListener('click',function(){
    var li =document.createElement('li')
    li.innerText =input.value
    ul.append(li)
})

