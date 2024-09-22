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
console.log(element_observer)
for(let i=0; i<element_observer.length;i++){
    observer.observe(element_observer[i])
}

for(let i=0; i<element_observer2.length;i++){
    observer.observe(element_observer2[i])
}
