$(document).ready(function(){
    var img=["https://images.unsplash.com/photo-1609258813678-10abb6c0a075?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"]
    var i=0;
    $('button').click(function(){
        $('img').attr('src',img[i])
        i++
    })
})
