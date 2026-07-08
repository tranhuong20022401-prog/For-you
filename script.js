const loading = document.getElementById("loading");
const openBtn = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const music = document.getElementById("music");

window.addEventListener("load", () => {

setTimeout(() => {

loading.style.display = "none";

},1500);

});

openBtn.addEventListener("click", () => {



});
letter.classList.remove("hidden");

try{

music.play();

}catch(e){}

window.scrollTo({

top:0,

behavior:"smooth"

});

});
const images = document.querySelectorAll(".photos img");

images.forEach((img) => {

img.addEventListener("click", () => {

img.classList.toggle("zoom");

});

});

const hearts = () => {

const heart = document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";

heart.style.left = Math.random()*100 + "vw";

heart.style.top = "100vh";

heart.style.fontSize = (20 + Math.random()*30) + "px";

heart.style.pointerEvents = "none";

heart.style.transition = "all 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform = "translateY(-120vh)";

heart.style.opacity = "0";

},50);

setTimeout(()=>{

heart.remove();

},6000);

};

setInterval(hearts,800);
