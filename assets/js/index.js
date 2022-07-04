
//scrolling event
document.addEventListener('scroll', () => {
    //topnav animation
    let topnav = document.getElementById('topnav')
    let scrollTopBtn = document.getElementById('scrollTopBtn')

    if(window.scrollY > 15) {
        topnav.classList.add('topnav-anim')
        scrollTopBtn.classList.add('show')
    }else{
        topnav.classList.remove('topnav-anim')
        scrollTopBtn.classList.remove('show')
    }
})
