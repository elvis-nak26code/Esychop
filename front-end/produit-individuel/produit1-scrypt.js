// container responsive
let containerRigth=document.getElementById('container-rigth')
let divReceveur=document.getElementById('espace-pour-info-produit-telephone')
let containerPrincipale=document.getElementById('container--principal')

window.addEventListener('load',()=>{
    let width=window.innerWidth
    if(width<=850){
        divReceveur.appendChild(containerRigth)
    }else
        containerPrincipale.appendChild(containerRigth)
})
window.addEventListener('resize',()=>{
    let width=window.innerWidth
    if(width<=850){
        divReceveur.appendChild(containerRigth)
    }else
        containerPrincipale.appendChild(containerRigth)
})

// togle de texterea commentaire
let btnAjouterCommentaire=document.getElementById('ajouter-commentaire')
let textereaCommentaire=document.getElementById('container-ajouter-commentaire')
let btnClose=document.getElementById('btn-close')
btnAjouterCommentaire.addEventListener('click',()=>{
    textereaCommentaire.classList.add('forme-visible')
})
btnClose.addEventListener('click',()=>{
    textereaCommentaire.classList.remove('forme-visible')
})
