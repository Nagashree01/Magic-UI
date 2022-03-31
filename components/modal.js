let showModalBtn = document.querySelector(".showModalBtn");
let modalBtn = document.querySelector(".modal-btn");
let modal = document.querySelector(".modal-wrapper")

showModalBtn.addEventListener('click',()=>{
    return modal.style.display = "block"
})

modalBtn.addEventListener('click',()=>{
    return modal.style.display = "none"
})