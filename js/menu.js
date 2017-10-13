document.addEventListener("DOMContentLoaded", function(){
    var menu = document.getElementById("menu"),
        menuButton = document.getElementById('menu-button');
    
    menuButton.addEventListener('click', function(){

        if(menu.className == "menu"){
            menu.classList.add('menu-active');
            header.classList.add('sticky');
        }
        else{
            menu.classList.remove('menu-active');
        }
    })

})
