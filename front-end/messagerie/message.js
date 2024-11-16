// definition des variable necessaire
let container=document.getElementById('affichage-m')
let btnEnvoi=document.querySelector('#input-m .container-input .btnenvoie .btn')
let inputSaisie=document.querySelector('.container-input input')

// fonction createur
function creat( tag="div" , classs=null ){
    element = document.createElement(tag)
    element.classList.add(classs)
    return element
}

// ajuster le scroll pour voir directement les message recents
window.addEventListener('load',()=>{
    // pour avoir la fin , jai fai hauteur total du scrooll - hauteur visible
    container.scrollTop=container.scrollHeight - container.clientHeight
})

// le bouton envoi cree le nouveau element et l'incere
btnEnvoi.addEventListener('click',()=>{
    let nawdate= new Date()
    let dateActuell=`${nawdate.getDate()}/${nawdate.getMonth()+1}/${nawdate.getFullYear()%1000}  ${nawdate.getHours()}h:${nawdate.getMinutes()}mn`
    if(inputSaisie.value!==""){
        let messageContainer= creat("div","item-r")
        let left=creat("div","rigth")
            // pour stimuler une animation au messages entrant
            setTimeout(()=>{
                left.classList.add('animationSortimessage')
            },8)
        let nom=creat('div','nom')
            nom.textContent="Nacanabo elvis"
        let mtexte=creat('p')
            mtexte.textContent=inputSaisie.value
        let time=creat('div','time')
        let span=creat('span')
            span.textContent=dateActuell
        time.appendChild(span)
        left.appendChild(nom)
        left.appendChild(mtexte)
        left.appendChild(time)
        messageContainer.appendChild(left)
        container.appendChild(messageContainer)
        inputSaisie.value=""
        container.scrollTop=container.scrollHeight - container.clientHeight
    }   
})