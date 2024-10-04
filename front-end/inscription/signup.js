    function DataTypeValidator(){
        // pour les mail
                const input=document.querySelectorAll('form input')
                for(let i=0; i<input.length; i++){
                    input[i].addEventListener('blur',()=>{
        
                    function mail(){
                        const mail=document.querySelector('.adress input')
                        const mailContent=mail.value
                        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                        if(!regexEmail.test(mailContent)){
                            document.getElementById('messageM').textContent="L'adresse email n'est pas valide"
                            document.querySelector('.adress input').classList.add("errorMail")
                        }
                        if(regexEmail.test(mailContent) || mailContent===""){
                            document.getElementById('messageM').textContent=""
                            document.querySelector('.adress input').classList.remove("errorMail")
                        }
                        // console.log('changement'+ mailContent)
                    }mail()
        
        // pour les mots de pass
                    function password(){
                        const password=document.querySelectorAll('.motDPass input')
                        const passwordContent=password[0].value
                        const passwordConfirmdContent=password[1].value
                        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        
                        if(!regexPassword.test(passwordContent)){
                            password[0].classList.add("errorMail")
                            document.getElementById('messageP').style.display="block"
                        }
                        if(regexPassword.test(passwordContent) || passwordContent===""){
                            document.getElementById('messageP').style.display="none"
                            password[0].classList.remove("errorMail")
                        }
                        if(passwordContent !== passwordConfirmdContent){
                            password[1].classList.add("errorMail")
                            document.querySelector('.mdp2 p').textContent='Non identique au premier'
                        }
                        if(passwordContent === passwordConfirmdContent || passwordConfirmdContent==""){
                            password[1].classList.remove("errorMail")
                            document.querySelector('.mdp2 p').textContent=''
                        }
                    }password()
        
        // numero de telephone 
                    function numero(){
                        const tel= document.querySelector('.tel input')
                        const telContent=tel.value
                        const regextel=/^\+\d{1,3}(\s*\d{1,4}){2,3}$/
        
                        if (!regextel.test(telContent) && telContent !== "") {
                            tel.classList.add("errorMail"); 
                        } else {
                            tel.classList.remove("errorMail"); 
                        }
                    }numero()
                
                    })
                }
        
    }DataTypeValidator()




function envoisDesDatas(){
    const form = document.querySelector('form')
    form.addEventListener('submit', async(e)=>{
        e.preventDefault(); //stop le submit par defaut
        // recuperation des donnees du form
        const Data={
            pays: document.querySelector('.region input').value,
            email: document.querySelector('.adress input').value,
            password1:document.querySelector('.mdp1 input').value,
            password: document.querySelector('.mdp2 input').value,
            nom: document.querySelector('.nomPrenom #nom').value,
            prenom: document.querySelector('.nomPrenom #prenom').value,
            tel: document.querySelector('.tel input').value,
            accord: document.querySelector('.accord input').checked
        };
    
        // essaie denvoi des donnee dans la base
        try{
            const reponse = await fetch('http://localhost:3000/api/auth/signup',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                // envoie des donnee dans la base sous forme de json
                body: JSON.stringify(Data)
            }) 
            // resulta de la requett
            const result= await reponse.json()
            if(reponse.ok){
                alert('inscription reissie')
                window.location.href ='../connection/index.html'
            }else {
                alert('erreur')
            }
            console.log(result)
            // gestion des erreurs
        }catch(e){
            console.error('Erreur:', error);
            alert('Une erreur est survenue lors de la soumission du formulaire.');
        }
    
        console.log(Data)
    })
    
}envoisDesDatas()
