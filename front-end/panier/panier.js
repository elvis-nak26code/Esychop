// gestion de l'affichage auto des prix
let produitsPanier=document.querySelectorAll("#container-principal .left .articles .check-title input")
let prix=document.getElementById('prixtotal')
console.log(prix)
for(let i=0 ;i<produitsPanier.length;i++){
    produitsPanier[i].addEventListener("change",()=>{
        if(produitsPanier[i].checked){
            console.log("tu ma cliker")
            let prixx= parseInt(prix.textContent) + 834.00
            prix.textContent=`${prixx}`
        }else
            {
                let prixx= parseInt(prix.textContent) - 834.00
                prix.textContent=`${prixx}`
            }
    })
}
console.log(produitsPanier)