

const botao = document.querySelector(".btn-plataforma");

const elementoPlatafotmas = document.querySelector(".btn-plataforma .plataformas");


botao.addEventListener("click", () => {
    
    elementoPlatafotmas.classList.toggle("ativo");

})