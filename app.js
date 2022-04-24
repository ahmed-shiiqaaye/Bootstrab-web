let tabBtns = document.querySelectorAll('.tab-btn button');
let tabContents = document.querySelectorAll('.content .tab-content ');

tabBtns.forEach((tabbtn,i) =>{
    tabbtn.addEventListener('click',(e)=>{
        tabContents.forEach(Content =>{
            Content.classList.remove('active')
        })
        tabBtns.forEach(tab =>{
             tab.classList.remove('active')
        })
        tabContents[i].classList.add('active')
        tabBtns[i].classList.add('active')
        
    })
    
})

