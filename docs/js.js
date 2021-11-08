const text = document.querySelector(".sub_name");
const projects = document.querySelectorAll(".p-items");
let s = document.getElementById("streaming")
let oracion = "Full Stack Web Developer";
const manto = document.querySelectorAll(".container-p");
const con = document.querySelector(".contact-t");
const project_t = document.querySelector(".project-title");
//mantos
let ms = document.getElementById("m-s");
let mg = document.getElementById("m-g");
let node = document.getElementById("m-n");
//skill
const skill = document.querySelectorAll(".skill-item");
const skill_container = document.querySelector(".skills");
//header
const home = document.getElementById("home");
let thanks = document.getElementById("thank");
let thanks_frase = "thank you, your message has been sent..."
    //VIDEO
const video = document.getElementById("video_container");
const imagen = document.getElementById("image");
const img_mobile = document.getElementById("mobile-img");

//header
const home_header = document.getElementById("home");
const about_header = document.getElementById("about");
const projects_header = document.getElementById("projects_header");
const contact_header = document.getElementById("Contact");

let o_frase = 1;


scrollTo(0, 0);

window.addEventListener("scroll", () => {
    if (scrollX > 3) {
        scrollTo(0, 0)
    }
})

if (window.location.href == "https://neyfer.github.io/Portfolio/thanks.html") {
    type_thanks();
}

if (screen.width > 600) {
    if (window.location.href == "https://neyfer.github.io/Portfolio/") {
        type();
    }
}


async function type_thanks() {
    let thanks_letters = thanks_frase.split("");
    for (i = 0; i < thanks_letters.length; i++) {
        await milisegundos(100);
        thanks.textContent += thanks_letters[i];
    }
    setTimeout(() => remove(), 2000);
    return
}




async function type() {
    if (o_frase == 1) {
        oracion = "Full Stack Web Developer";
    } else if (o_frase == 2) {
        oracion = "Game Developer";
    }
    if (o_frase == 1) {
        o_frase = 2;
    } else {
        o_frase = 1;
    }
    let letras = oracion.split("");
    for (i = 0; i < letras.length; i++) {
        await milisegundos(180);
        text.textContent += letras[i];

    }

    setTimeout(() => remove(), 2000);
    return
}

async function milisegundos(ms) {
    let promesa = new Promise(function(res) {
        setTimeout(res, ms);
    })
    return promesa;
}

async function remove() {
    text.textContent = "";

    type();
}

projects.forEach(p => {
    console.log(p.id);
    p.addEventListener("mouseover", () => {
        if (p.id == "streaming") {
            ms.hidden = false;
        } else if (p.id == "gallery") {
            mg.hidden = false;
        } else if (p.id == "node") {
            node.hidden = false;
        }
    })
    p.addEventListener("mouseout", () => {
        ms.hidden = true;
        mg.hidden = true;
        node.hidden = true;
    })
});
if (screen.width > 600) {
    window.addEventListener('scroll', () => {
        if (scrollY > 250) {
            project_t.animation = "appear 3s"
            project_t.style.opacity = "1";
        }
        if (scrollY > 500) {
            projects.forEach(pro => {
                pro.style.animation = "appear 4s";
                pro.style.opacity = "1";
            })
        }

        /*if (scrollY > 920) {
            skill_container.style.animation = "appear 2s";
            skill_container.style.opacity = "1"
        }*/
        if (scrollY > 1015) {

            skill.forEach(s => {
                s.style.animation = "skill 3s cubic-bezier(0.4, 0, 0, 1.73)";
                s.style.margin = "2%";

            })
        }

        if (scrollY > 1300) {
            con.style.animation = "appear 4s";
            con.style.opacity = "1";
        }
    })
}
///FOR MOBILES


if (screen.width < 600) {
    ms.hidden = false;
    mg.hidden = false;
    node.hidden = false;


    video.remove();
    imagen.style.width = "99vw";
    imagen.style.height = "70vh";
    img_mobile.hidden = false;
    img_mobile.src = "mobile_background.png";
    img_mobile.style.objectFit = "cover";
    type();
    window.addEventListener('scroll', () => {
        if (scrollY > 220) {
            project_t.animation = "appear 3s"
            project_t.style.opacity = "1";
        }
        if (scrollY > 230) {
            projects.forEach(pro => {
                pro.style.animation = "appear 4s";
                pro.style.opacity = "1";
            })
        }

        if (scrollY > 673) {
            skill_container.style.animation = "appear 2s";
            skill_container.style.opacity = "1"
        }
        if (scrollY > 686) {
            skill.forEach(s => {
                s.style.animation = "skill 3s cubic-bezier(0.4, 0, 0, 1.73)";
                s.style.margin = "2%";

            })
        }

        if (scrollY > 717) {
            con.style.animation = "appear 4s";
            con.style.opacity = "1";
        }
    })
}

home_header.addEventListener("click", () => {
    scrollTo(0, 0)
})
about_header.addEventListener("click", () => {
    scrollTo(0, 385)
})

projects_header.addEventListener("click", () => {
    scrollTo(0, 743)
})
contact_header.addEventListener("click", () => {
    scrollTo(0, 1495)
})
