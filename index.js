let menu=document.getElementById("navmenu");
let close=document.getElementById("close");
menu.addEventListener("click",()=>
document.getElementById("lists").style.display="flex"
)

close.addEventListener("click",()=>
document.getElementById("lists").style.display="none"
)