
const btnPaintme = document.getElementById("paintme-button");
const paintme = document.getElementById("paintme");

const btnCloseModal = document.querySelectorAll(".btn-close-modal-size");

const btnSize = document.getElementById("btn-size");
const modalSize = document.getElementById("size-modal");


btnCloseModal.forEach(buttonCloseModal => {
    buttonCloseModal.addEventListener("click", ()=>{
        modalSize.classList.toggle("show");
    });
});

btnPaintme.addEventListener("click", ()=>{
    paintme.classList.toggle("show");
});

btnSize.addEventListener("click", ()=>{
    modalSize.classList.toggle("show");
});







// Get a regular interval for drawing to the screen
window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame || 
       window.webkitRequestAnimationFrame ||
       window.mozRequestAnimationFrame ||
       window.oRequestAnimationFrame ||
       window.msRequestAnimaitonFrame ||
       function (callback) {
    window.setTimeout(callback, 1000/60);
       };
})();