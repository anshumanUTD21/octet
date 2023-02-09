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
const navEl=document.querySelector('.header__nav--bottom');
console.log(navEl)

const navElHeight=navEl.getBoundingClientRect().height;

const headContent=document.querySelector('.header__content');

const stickyNav=function(entries){
    const [entry]=entries;
    if(!entry.isIntersecting){
        navEl.classList.add('sticky');
    }else{
        navEl.classList.remove('sticky');
    }
}

const headObserver=new IntersectionObserver(stickyNav,{
    root:null,threshold:0,rootMargin:`-${navElHeight}px`
});

headObserver.observe(headContent);