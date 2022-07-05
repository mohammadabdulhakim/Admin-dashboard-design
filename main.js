let menu = document.querySelector('aside')


function hideMenu(){
    menu.style.display='none'
}

function showMenu(){
    menu.style.display='block'
}

function themeToggle(tg){
    document.body.classList.toggle('dark-theme-variables');
    tg.querySelector('i:nth-child(1)').classList.toggle('active');
    tg.querySelector('i:nth-child(2)').classList.toggle('active');
}