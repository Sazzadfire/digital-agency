// humbergermeni
const clicbtn = document.querySelector("#humberger-menu");
const navigation = document.querySelector("#nav-list");

clicbtn.addEventListener('click', ()=>{
    navigation.classList.toggle("open");
});