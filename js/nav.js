document.addEventListener("DOMContentLoaded", function(){
    
    var header = document.querySelector('.header');
    
    window.addEventListener('scroll', function(){
        
        var currentPosition = pageYOffset;
        
        if(currentPosition > 115){
            header.classList.add('sticky');
        }
        else{
            header.classList.remove('sticky');
        }
    })
})
