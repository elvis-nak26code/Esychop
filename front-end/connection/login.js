
const form = document.querySelector('form')
form.addEventListener('submit', async(e)=>{
    e.preventDefault()

    const data={
        email: document.querySelector('form .adress input').value,
        password: document.querySelector('form .motDPass input').value
    }
    
    try{
        const reponse = await fetch('http://localhost:3000/api/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const resultat = await reponse.json()
        if(reponse.ok){
            alert('connection reuissie')
            window.location.href ='../index.html'
            localStorage.setItem('token', resultat.token)
            console.log(resultat.token)
        }else {
            alert('une erreur sai produite')
        }
        console.log(resultat)
    }catch(errorr){
        console.error('Erreur:', errorr);
        alert('Une erreur est survenue lors de la soumission du formulaire.');
    }
})