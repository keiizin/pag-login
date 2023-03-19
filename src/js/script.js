let btn = document.querySelector(".Login");

let menu = document.querySelector(".menu");

let register = document.querySelector(".registre");

let login = document.querySelector(".entre");


btn.addEventListener("click", function(){
   /*  menu.classList.add("fade"); */
    if(menu.classList.contains("fade")) {
        menu.classList.remove("fade")
    }else {
        menu.classList.add("fade")
    }

}) 

register.addEventListener("click", function(){
    menu.classList.add("ativado");
})

login.addEventListener("click", function(){
    menu.classList.remove("ativado");
})
