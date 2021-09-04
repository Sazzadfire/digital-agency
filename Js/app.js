// humbergermeni
const clicbtn = document.querySelector("#humberger-menu");
const navigation = document.querySelector(".nav-bar");

clicbtn.addEventListener('click', ()=>{
    navigation.classList.toggle("open");
});