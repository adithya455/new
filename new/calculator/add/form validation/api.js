$(document).ready(function(){
    $('button').click(function(){
        var name=$('input').val()
    

        $.get(`http://www.omdbapi.com/?t=${name}&apikey=cb0997b5`,function(data){

            $('#name').text(data.Director)
            console.log(data)
        })
    })
})