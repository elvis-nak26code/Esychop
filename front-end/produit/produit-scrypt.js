// lik
function lik(){
    let lik=document.querySelectorAll('.produit .panier .lik img')
    console.log(lik)
    for(let i=0;i<=lik.length;i++){
        lik[i].addEventListener('click',()=>{
            let UrlRelative=lik[i].src.replace(window.location.origin + '/', './')
            if(UrlRelative==='./icon/coeur-rouge.png'){
                lik[i].src='./icon/icons8-coeurs-24.png'
            }else
                lik[i].src='./icon/coeur-rouge.png'
        })
    }
}
lik()