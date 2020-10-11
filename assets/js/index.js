
const btnPaintme = document.getElementById("paintme-button");
const paintme = document.getElementById("paintme");


btnPaintme.addEventListener("click", ()=>{
    paintme.classList.toggle("show");
});