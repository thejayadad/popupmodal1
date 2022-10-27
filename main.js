let btn=document.getElementById("button");
let modal=document.querySelector(".modal_box");
let closeBtn=document.querySelector(".close_btn");

btn.addEventListener("click",function(){
    modal.style.display="block";
})

closeBtn.addEventListener("click",function(){
    modal.style.display="none";
})


window.addEventListener("click",function(e){
    if(e.target==modal){
        modal.style.display="none";
    }
})