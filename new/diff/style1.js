var q1=[21,45,56,60,69,60];
var q2=[21,68,44,55,56,57];
for(var i=0;i<q1.length;i++){
    for(var j=0;j<q2.length;j++){
        if(q1[i]==q2[j]){
            q2.splice(i,1)
        }
    } 
}
console.log(q2)
