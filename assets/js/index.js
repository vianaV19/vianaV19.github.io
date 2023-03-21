//topnav animation
const topnav = document.getElementById('topnav')
const scrollTopBtn = document.getElementById('scrollTopBtn')

const about = document.getElementById('about')
const skills = document.getElementById('skills')

let anim_about = false
let anim_skills = false

//scrolling event
document.addEventListener('scroll', () => {


    if (window.scrollY > 15) {
        topnav.classList.add('topnav-anim')
        scrollTopBtn.classList.add('show')
    } else {
        topnav.classList.remove('topnav-anim')
        scrollTopBtn.classList.remove('show')
    }


    //GSAP ANIMATIONS
    if (window.scrollY >= 160 && !anim_about) { gsap.from("#about", { duration: 1.5, opacity: 0, scale: 0.5, ease: 'back' }); anim_about = true; about.style.display = 'flex' }

    if (window.scrollY >= 2100 && !anim_skills) {
        gsap.from("#skills", { duration: 1.5, opacity: 0, scale: 0.5 }); anim_skills = true; skills.style.display = 'flex';

        //ANIMATING SKILLS ITEMS
        const t = 12; let i = 0;
        
        const animate_items = setInterval(() => {

            if (i == t) {
                clearInterval(animate_items)
            } else {
                let item = document.getElementById("skills").getElementsByClassName("item")

                item[i].style.display = "block"

                gsap.to(item[i], { duration: 1, opacity: 1, scale: 1, ease: 'back' });

                i++;
            }
        }, 200)

        animate_items()

    }

    // console.log(scrollY)
})

//sending email function
function sendEmail() {
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let bodyEmail = document.getElementById('body-email')

    window.location.href = `mailto:matheus.viana518062@gmail.com?subject=${nome.value}&cc=${email.value}&body=${bodyEmail.value}`
}

function sobre(){
    
}


