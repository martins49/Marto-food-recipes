console.log("marto foods")
const burgerEl = document.getElementById("burger")
const menuEl = document.getElementById("menu")

burgerEl.addEventListener("click", function(){
    if (menuEl.classList.contains("hidden")){
        menuEl.classList.remove("hidden")
    }
    else{
        menuEl.classList.add("hidden")
    }

})