
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


function sendEmail() {
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let bodyEmail = document.getElementById('body-email')

    window.location.href = `mailto:matheus.viana518062@gmail.com?subject=${nome.value}&cc=${email.value}&body=${bodyEmail.value}`

}

//setting projects size
// const pjg = document.getElementById("projects-group");
// const itemsQntd = pjg.childElementCount
// const offset_gap = 0;
// const w = (300 + offset_gap) * itemsQntd 

// pjg.style.width = w + "px"
