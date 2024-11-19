
// inpute recherche
let headerinput=document.querySelector('.infoAcceuil .recherche')
let navinput=document.querySelector('nav .recherche')
window.addEventListener('scroll',()=>{
    if(headerinput.getBoundingClientRect().top<=10){
        navinput.classList.add('inputactive')
    }else navinput.classList.remove('inputactive')
})
// lik
function lik(){
    let lik=document.querySelectorAll('.produit .panier .lik img')
    console.log(lik)
    for(let i=0;i<=lik.length;i++){
        lik[i].addEventListener('click',()=>{
            let UrlRelative=lik[i].src.replace(window.location.origin + '/', './')
            if(UrlRelative==='./front-end/icon/coeur-rouge.png'){
                lik[i].src='./front-end/icon/icons8-coeurs-24.png'
            }else
                lik[i].src='./front-end/icon/coeur-rouge.png'
        })
    }
}lik()