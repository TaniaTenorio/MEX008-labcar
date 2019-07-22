let logIn = document.getElementById("logIn");
let modalLogIn = document.getElementById("modal-login");
let close = document.getElementsByClassName("close")[0];

 
const logInModal = () => {
    modalLogIn.style.display = "block";
};

logIn.addEventListener("click", logInModal);

const closeModal = () => {
    modalLogIn.style.display = "none";
};
close.addEventListener("click", closeModal);
