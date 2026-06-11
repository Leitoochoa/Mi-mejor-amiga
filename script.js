function scrollToSection(id){
document.getElementById(id).scrollIntoView();
}

function correct(){
document.getElementById("quiz-result").innerHTML =
"⭐ Correcto. Siempre serás mi estrellita.";
}

function wrong(){
document.getElementById("quiz-result").innerHTML =
"😅 Inténtalo otra vez.";
}

function openLetter(element){

const text =
element.querySelector(".hidden-text");

if(text.style.display==="block"){
text.style.display="none";
}
else{
text.style.display="block";
}
}

const images =
document.querySelectorAll(".gallery img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

function closeLightbox(){

lightbox.style.display="none";

}
