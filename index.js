const interaction=document.querySelector('.header-menu');
const button=document.querySelector('.burger-button');
const header_links=document.querySelectorAll('.header-link');


function isActive(){
    if(!interaction.classList.contains('is-active'))
    {
        interaction.classList.add('is-active');
    }
    else if(interaction.classList.contains('is-active')){
        interaction.classList.remove('is-active');
    }
}

function takeOff(){
    if(interaction.classList.contains('is-active'))
    {
        setTimeout(() => {
            interaction.classList.remove('is-active');
        }, 50);
    }
}

const ipad=window.matchMedia('screen and (max-width:1024px) and (min-width:769px)');

ipad.addListener(validation);

function validation(event){
    if(event.matches){
        button.addEventListener('click',isActive);
    }
    else{
        button.removeEventListener('click',isActive);
    }
}