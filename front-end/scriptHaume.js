
// inpute recherche
let headerinput=document.querySelector('.infoAcceuil .recherche')
let navinput=document.querySelector('nav .recherche')
window.addEventListener('scroll',()=>{
    if(headerinput.getBoundingClientRect().top<=10){
        navinput.classList.add('inputactive')
    }else navinput.classList.remove('inputactive')
})