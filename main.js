
let open=document.getElementById("open");
let modal=document.getElementById("modal");
let close=document.getElementById("close");

open.addEventListener("click",function(){
    modal.style.display="block";
})

close.addEventListener("click",function(){
    modal.style.display="none";
})


window.addEventListener("click",function(e){
    if(e.target==modal){
        modal.style.display="none";
    }
})