// intersection observer
let thhld= .1
let options = {
    root: null,
    rootMargin: "0px",
    threshold: thhld,
    };
    
    let callback = function(entries, observer){
        entries.forEach( function (entry) {
            if(entry.intersectionRatio > thhld){
                entry.target.classList.add("visible")
            }
        });
    }
const observer = new IntersectionObserver(callback, options)

let element_observer= document.querySelectorAll(".observer1")
let element_observer2= document.querySelectorAll(".observer2")
let element_observer3= document.querySelectorAll(".observer3")
for(let i=0; i<element_observer.length;i++){
    observer.observe(element_observer[i])
}
for(let i=0; i<element_observer2.length;i++){
    observer.observe(element_observer2[i])
}
for(let i=0; i<element_observer3.length;i++){
    observer.observe(element_observer3[i])
}

// apparution du profile au click
function clickMenu(){
    const button=document.getElementById('userN')
    button.addEventListener('click',()=>{
        document.getElementById('userinfo').classList.toggle('menutoggle')
    })
}clickMenu()

// get profile
async function getprofil(){
    const token= localStorage.getItem('token')
    console.log(token)
    const reponse=await fetch('http://localhost:3000/api/auth/user/profil',{
        method: 'GET',
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
    if(reponse.ok){
        const userdata = await reponse.json()
        const nom= userdata.prenom.charAt(0)
        document.getElementById('userN').textContent=nom.toUpperCase()

        document.getElementById('emailUtilusateur').textContent=userdata.email
        document.getElementById('nomlUtilusateur').textContent=userdata.nom
        document.getElementById('prenomutilusateur').textContent=userdata.prenom
        document.getElementById('tellUtilusateur').textContent=userdata.tel
        document.getElementById('slttn').textContent=userdata.prenom
    }else{
        console.error('Error fetching user profile:');
    }

}getprofil()



