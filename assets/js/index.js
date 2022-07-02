
//scrolling event
document.addEventListener('scroll', () => {
    //topnav animation
    let topnav = document.getElementById('topnav')

    if(window.scrollY > 15) {
        topnav.classList.add('topnav-anim')
    }else{
        topnav.classList.remove('topnav-anim')
    }
})
