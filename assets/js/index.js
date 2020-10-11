
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