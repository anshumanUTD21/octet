"use strict";
let tabs=document.querySelectorAll('.plans__tab');
let tabsContent=document.querySelectorAll('.plans__tabs--content');


tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>{
        tabsContent.forEach(content=>{
            content.classList.remove('show')
        })
        tabs.forEach(tab=>{
            tab.classList.remove('active');
        })
        tabsContent[index].classList.add('hide')
        tabs[index].classList.add('active');
    })
})

console.log(tabs);
console.log(tabsContent);