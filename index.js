var interaction=document.querySelector('.header-menu');
var button=document.querySelector('.burger-button');

button.addEventListener('click',isActive);

done=false;
function isActive(){
    if(!done)
    {
        interaction.classList.add('is-active');
        done=true;
    }
    else if(done){
        interaction.classList.remove('is-active');
        done=false;
    }
}