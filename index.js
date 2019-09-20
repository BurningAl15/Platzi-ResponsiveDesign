const interaction=document.querySelector('.header-menu');
const button=document.querySelector('.burger-button');
const header_links=document.querySelectorAll('.header-link');

button.addEventListener('click',isActive);
// for(var i=0;i<header_links;i++)
// {
//     header_links[i].setAttribute('href','javascript:takeOff()');
// }

// console.log(header_links);

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

function takeOff(){
    setTimeout(() => {
        interaction.classList.remove('is-active');
        done=false;
    }, 50);
}