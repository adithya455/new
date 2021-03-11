$(document).ready(function(){
    var recent=JSON.parse(localStorage.getItem('recent'))

    if(recent==null){
        var recent=[]
    }
    for(item of recent){
        $('ul').append('<li>'+item+'</li>')
    }

    console.log('hi')
    $('button').click(function(){
        var name=$('input').val()
        var res=fetch(`http://www.omdbapi.com/?t=${name}&apikey=cb0997b5`)
        
        res.then(response=>{
            return response.json()
        }).then((data)=>{
            // $('#name').text(data.Director)
            console.log(data)
            var dr= data.Director
            $('ul').append('<li>'+dr+'</li>')

            recent.push(dr)

            localStorage.setItem('recent', JSON.stringify(recent))
 
        })
        
    })
})