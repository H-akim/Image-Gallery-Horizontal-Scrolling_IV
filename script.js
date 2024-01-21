let scrollcontainer = document.querySelector(".gallery");
let back_btn = document.getElementById("back_btn");
let next_btn = document.getElementById("next_btn");

scrollcontainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
    scrollcontainer.style.scrollBehavior = "auto";
});

next_btn.addEventListener("click",()=>{
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += 900;
})

back_btn.addEventListener("click",()=>{
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= 900;
})