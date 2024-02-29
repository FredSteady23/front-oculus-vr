'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
})

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    });
//  -37-25
    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    })

    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelectorAll(`#${button}`).classList.add('tabs__content-item--active');

}