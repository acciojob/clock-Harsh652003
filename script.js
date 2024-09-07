//your JS code here. If required.
let  td=document.getElementById("timer")

let cd=new Date()

setInterval(

    function(){

        cd=new Date()

        td.innerHTML=cd.toLocaleString()

    }, 1000

)