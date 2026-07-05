// =====================================
// CORAZONES FLOTANDO
// =====================================

const particles = document.getElementById("particles");
const card = document.querySelector(".glass");

const hearts = ["❤️","💖","💕","💗","💘","💝","💞"];

function createHeart(){

    const heart = document.createElement("span");

    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.position = "absolute";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.top = "-50px";

    heart.style.fontSize = (15 + Math.random()*30) + "px";

    heart.style.opacity = Math.random()*0.8 + 0.2;

    heart.style.animation = `fall ${6 + Math.random()*6}s linear forwards`;

    particles.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },12000);

}

setInterval(createHeart,350);

// =====================================
// ANIMACIÓN DE CAÍDA
// =====================================

const style = document.createElement("style");

style.innerHTML = `
@keyframes fall{

0%{

transform:translateY(-80px) rotate(0deg);

}

100%{

transform:translateY(120vh) rotate(360deg);

}

}
`;

document.head.appendChild(style);

// =====================================
// EFECTO 3D TARJETA
// =====================================

document.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth/2 - e.clientX)/35;

    const y = (window.innerHeight/2 - e.clientY)/35;

    card.style.transform =
    `rotateY(${-x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave",()=>{

    card.style.transform =
    "rotateY(0deg) rotateX(0deg)";

});

// =====================================
// EFECTO EN BOTÓN
// =====================================

const button = document.querySelector(".boton");

button.addEventListener("mouseenter",()=>{

    button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

    button.style.transform="scale(1)";

});

// =====================================
// APARICIÓN SUAVE
// =====================================

window.onload=()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="1.2s";

        document.body.style.opacity="1";

    },100);

};
// ===============================
// 100 RAZONES
// ===============================

const razones = [

"Porque desde que llegaste mi vida es más feliz.",
"Porque tu sonrisa ilumina mis días.",
"Porque contigo aprendí lo que significa amar.",
"Porque eres mi lugar seguro.",
"Porque siempre encuentro paz en tus abrazos.",
"Porque haces especiales los días más simples.",
"Porque me inspiras a ser una mejor persona.",
"Porque admiro tu forma de ver la vida.",
"Porque nunca dejas de sorprenderme.",
"Porque contigo puedo ser completamente yo.",

"Porque confías en mí.",
"Porque me haces reír incluso en los días difíciles.",
"Porque tu voz me tranquiliza.",
"Porque me encanta escuchar tus historias.",
"Porque haces que todo tenga sentido.",
"Porque nuestros recuerdos valen oro.",
"Porque amo tu forma de cuidar de los demás.",
"Porque tu corazón es hermoso.",
"Porque eres fuerte incluso cuando no lo notas.",
"Porque nunca me faltan motivos para elegirte.",

"Porque sueño con un futuro contigo.",
"Porque quiero seguir creciendo a tu lado.",
"Porque contigo aprendí que el amor también es paciencia.",
"Porque me haces sentir afortunado.",
"Porque eres mi persona favorita.",
"Porque tu felicidad también es la mía.",
"Porque haces bonito cualquier lugar.",
"Porque contigo cualquier momento vale la pena.",
"Porque me encanta tu forma de mirarme.",
"Porque cada conversación contigo me deja algo bonito.",

"Porque haces que mi corazón lata más fuerte.",
"Porque me motivas cada día.",
"Porque eres parte de mis mejores recuerdos.",
"Porque siempre encuentro un motivo para sonreír contigo.",
"Porque me encanta compartir mis sueños contigo.",
"Porque me apoyas incluso cuando dudo de mí.",
"Porque nunca quiero perder lo que hemos construido.",
"Porque eres increíble.",
"Porque me haces sentir amado.",
"Porque haces que el tiempo pase volando.",

"Porque contigo aprendí que el amor también es amistad.",
"Porque eres única.",
"Porque eres auténtica.",
"Porque haces que quiera ser mejor.",
"Porque cada detalle tuyo me enamora.",
"Porque tu forma de amar es hermosa.",
"Porque me das tranquilidad.",
"Porque contigo todo parece posible.",
"Porque me encanta caminar contigo.",
"Porque nuestros silencios también hablan.",

"Porque siempre encuentro algo nuevo para admirar de ti.",
"Porque tu compañía vale más que cualquier regalo.",
"Porque cada abrazo tuyo se siente como hogar.",
"Porque nunca me canso de ti.",
"Porque me encanta compartir mi vida contigo.",
"Porque me haces creer en el amor.",
"Porque eres una bendición.",
"Porque siempre estás en mis pensamientos.",
"Porque haces especial cada fecha.",
"Porque nuestras historias apenas comienzan.",

"Porque quiero seguir escribiendo capítulos contigo.",
"Porque me haces feliz sin darte cuenta.",
"Porque eres mi inspiración.",
"Porque cada día contigo vale la pena.",
"Porque haces que sonría sin motivo.",
"Porque contigo el futuro da ilusión.",
"Porque tus ojos transmiten paz.",
"Porque eres un regalo de Dios para mi vida.",
"Porque me encanta cómo eres.",
"Porque nunca dejaré de admirarte.",

"Porque contigo aprendí a valorar los pequeños momentos.",
"Porque tus mensajes alegran mi día.",
"Porque haces que todo sea más bonito.",
"Porque nuestras diferencias nos hacen crecer.",
"Porque me encanta soñar contigo.",
"Porque eres una mujer increíble.",
"Porque tu presencia cambia mi día.",
"Porque siempre tienes un lugar en mi corazón.",
"Porque eres mi mejor decisión.",
"Porque contigo descubrí una nueva forma de amar.",

"Porque eres mi tranquilidad.",
"Porque me encanta tomarte de la mano.",
"Porque tus abrazos curan cualquier mal día.",
"Porque eres la respuesta a muchas de mis oraciones.",
"Porque cada día encuentro una nueva razón para elegirte.",
"Porque contigo quiero formar una familia.",
"Porque me haces sentir completo.",
"Porque quiero envejecer contigo.",
"Porque nunca dejaré de luchar por nosotros.",
"Porque contigo siempre hay esperanza.",

"Porque eres mi hogar.",
"Porque eres mi paz.",
"Porque eres mi alegría.",
"Porque eres mi inspiración.",
"Porque eres mi presente.",
"Porque eres mi futuro.",
"Porque eres mi sueño cumplido.",
"Porque te amo con todo mi corazón.",
"Porque volvería a elegirte mil veces.",
"Porque simplemente eres tú ❤️"

];

const contenedor = document.getElementById("contenedorRazones");

if(contenedor){

razones.forEach((texto, i)=>{

contenedor.innerHTML += `

<div class="card">

<h2>${i+1}</h2>

<p>${texto}</p>

</div>

`;

});

}
// ===============================
// ANIMACIÓN AL HACER SCROLL
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>observer.observe(card));
//==================================
// BARRA DE PROGRESO
//==================================

const progressBar=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const porcentaje=(scrollTop/scrollHeight)*100;

    if(progressBar){

        progressBar.style.width=porcentaje+"%";

    }

});
//==================================
// FINAL CON SUSPENSO
//==================================

const finalBox=document.querySelector(".final-box");

if(finalBox){

const observerFinal=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

setTimeout(()=>{

const mensaje=document.getElementById("mensajeFinal");

mensaje.innerHTML=`
Ninguna.<br><br>
Porque contigo quiero todo...<br><br>
hasta el infinito. ♾️❤️
`;

mensaje.style.animationPlayState="running";`
Ninguna.<br><br>
Porque contigo quiero todo...<br><br>
hasta el infinito. ♾️❤️
`;

document.getElementById("btnCarta").style.display="inline-block";

},3000);

observerFinal.disconnect();

}

});

},{threshold:.8});

observerFinal.observe(finalBox);

}
//==============================
// EFECTO 3D TARJETAS
//==============================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});