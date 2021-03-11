//var email = document.getElementById("email");
var form = document.getElementById("form");
//var btn=document.getElementById('submit')
//var error=document.getElementById('error')
var formobject={
    email:{
        field:document.getElementById('email'),
        error_field:document.getElementById('error'),
        valid:function(){
            return this.field.validity.valid
        },
        showerrors:function(){
                if(this.field.validity.valueMissing){
                    this.error_field.innerText="invalid email"
            
                }
            },
    },
    phone:{
        field:document.getElementById('phone'),
        error_field:document.getElementById('error'),
        valid:function(){
            return this.field.validity.valid
        },   
        showerrors:function(){
            if(this.field.validity.valueMissing){
                this.error_field.innerText = "invalid phoneno"
        
            }
        }
    },
    validate:function (){
        var fields=[this.email,this.phone]
        for(field of fields){
            if(!field.valid()){
                field.showerrors()
            }
        }
}
}


form.addEventListener('submit', function(event){
    event.preventDefault()

    formobject.validate()
})