



var findSlides = document.querySelectorAll('.slide');
var findDescrip = document.querySelectorAll('.image-info');
var prevSlideBut = document.querySelector('.fa-toggle-left');
var nextSlideBut = document.querySelector('.fa-toggle-right');

if(findSlides.length == 0){
    
}
else{

function moveSlidesFow(){
        
    
    if(findSlides[0].classList.contains('active') == true){
        
        findSlides[0].classList.remove('active');
        findSlides[1].classList.add('active');
        
    }
    else if(findSlides[1].classList.contains('active') == true){
        findSlides[1].classList.remove('active');
        findSlides[2].classList.add('active'); 
    }
    else if(findSlides[2].classList.contains('active') == true){
        findSlides[2].classList.remove('active');
        findSlides[3].classList.add('active'); 
    }
    else{
        findSlides[3].classList.remove('active');
        findSlides[0].classList.add('active');         
    }
    
    if(findDescrip[0].classList.contains('active') == true){
        
        findDescrip[0].classList.remove('active');
        findDescrip[1].classList.add('active');
        
    }
    else if(findDescrip[1].classList.contains('active') == true){
        findDescrip[1].classList.remove('active');
        findDescrip[2].classList.add('active'); 
    }
    else if(findDescrip[2].classList.contains('active') == true){
        findDescrip[2].classList.remove('active');
        findDescrip[3].classList.add('active'); 
    }
    else{
        findDescrip[3].classList.remove('active');
        findDescrip[0].classList.add('active');         
    }
    

    
     
}

function moveSlidesBack(){
        
    
    if(findSlides[0].classList.contains('active') == true){
        
        findSlides[0].classList.remove('active');
        findSlides[3].classList.add('active');
        
    }
    else if(findSlides[1].classList.contains('active') == true){
        findSlides[1].classList.remove('active');
        findSlides[0].classList.add('active'); 
    }
    else if(findSlides[2].classList.contains('active') == true){
        findSlides[2].classList.remove('active');
        findSlides[1].classList.add('active'); 
    }
    else{
        findSlides[3].classList.remove('active');
        findSlides[2].classList.add('active');         
    }
    
        
    
    if(findDescrip[0].classList.contains('active') == true){
        
        findDescrip[0].classList.remove('active');
        findDescrip[3].classList.add('active');
        
    }
    else if(findDescrip[1].classList.contains('active') == true){
        findDescrip[1].classList.remove('active');
        findDescrip[0].classList.add('active'); 
    }
    else if(findDescrip[2].classList.contains('active') == true){
        findDescrip[2].classList.remove('active');
        findDescrip[1].classList.add('active'); 
    }
    else{
        findDescrip[3].classList.remove('active');
        findDescrip[2].classList.add('active');         
    }
    

    
     
}

var infinitySlides = setInterval(moveSlidesFow, 4500);

function oneSlideFow(){
    clearInterval(infinitySlides);
    moveSlidesFow();
    
}

function oneSlideBack(){
    clearInterval(infinitySlides);
    moveSlidesBack();
    
}

nextSlideBut.addEventListener('click', oneSlideFow);

prevSlideBut.addEventListener('click', oneSlideBack);



    
}




const menuList = document.querySelectorAll('.menu-ul > li');
const menuInfo = document.querySelectorAll('.front-menu-info');


function menuClick(e){
    
    var clickedItem = e.target;
    

    
    if(clickedItem.innerHTML == "Apps"){
        

            menuInfo.forEach((von) =>{
            if(von.classList.contains('menu-display') == true){

                von.classList.remove('menu-display');

            }  
            else{

            }      
        
            var appsClass = document.querySelector('.apps');
            
            appsClass.classList.add('menu-display');
        
            });
    }   
    if(clickedItem.innerHTML == "Mains"){
        

            menuInfo.forEach((von) =>{
            if(von.classList.contains('menu-display') == true){

                von.classList.remove('menu-display');

            }  
            else{
  
            }      
        
            var appsClass = document.querySelector('.mains');
            
            appsClass.classList.add('menu-display');
        
            });
    }   
    if(clickedItem.innerHTML == "Deserts"){
        

            menuInfo.forEach((von) =>{
            if(von.classList.contains('menu-display') == true){

                von.classList.remove('menu-display');

            }  
            else{

            }      
        
            var appsClass = document.querySelector('.deserts');
            
            appsClass.classList.add('menu-display');
        
            });
    }  
    if(clickedItem.innerHTML == "Drinks"){
        

            menuInfo.forEach((von) =>{
            if(von.classList.contains('menu-display') == true){
 
                von.classList.remove('menu-display');

            }  
            else{
            }      
        
            var appsClass = document.querySelector('.drinks');
            
            appsClass.classList.add('menu-display');
        
            });
    }   
    
    
    
    
    
    
    
    if(clickedItem.localName == 'li'){ 
            
            
                menuList.forEach((listItem) =>{
                if(listItem.classList.contains('menu-select') == true){

                    listItem.classList.remove('menu-select');

                }  
                else{

                }

                e.target.classList.add('menu-select');

            });    
            
            
            
        }
    
    else{} 
    
}


menuList.forEach((listItem) =>{ 
    listItem.addEventListener('click', menuClick);    
    
});





var calItem = document.querySelectorAll('.cal-item');
var calModelDiv = document.querySelector('.res-cal-model');
var calModelClose = document.querySelector('.model-close');


if(calModelClose == null){
    
}
else{


function calModel(){
    calModelDiv.classList.add('show-cal');
}

calItem.forEach((item) =>{
    
    item.addEventListener('click', calModel);
    
});
function closeCalModel(){
    calModelDiv.classList.remove('show-cal');
}
calModelClose.addEventListener('click', closeCalModel);
    
    
}


const menuOpen = document.querySelector('.top-holder .fa-bars');
const menuClose = document.querySelector('.top-nav .fa-close');

function openMenu(){
    var menuStat = document.querySelector('.top-nav-and-logo-mobile .top-holder .top-nav');
 
        menuStat.classList.remove('shrink');
        menuStat.classList.add('grow');   
 
}

menuOpen.addEventListener('click', openMenu);
function closeMenu(){
    var menuStat = document.querySelector('.top-nav-and-logo-mobile .top-holder .top-nav');
 
        menuStat.classList.remove('grow');
        menuStat.classList.add('shrink');   
 
}

menuClose.addEventListener('click', closeMenu);
