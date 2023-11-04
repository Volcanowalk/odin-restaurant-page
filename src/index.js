import './style.css';
import { displayHome } from './home';
import { displayNav } from './nav';
import { displayMenu } from './menu';
import { displayContact } from './contact';


document.addEventListener('DOMContentLoaded', () => {
    displayNav()
    displayHome()
    
    const div_main = document.querySelector('.div-main')
    const btnHome = document.querySelector('.btnHome')
    const btnMenu = document.querySelector('.btnMenu')
    const btnContact = document.querySelector('.btnContact')

    btnHome.addEventListener('click', () => {
        div_main.innerHTML = ''
        displayHome()
    })
    btnMenu.addEventListener('click', () => {
        div_main.innerHTML = ''
        displayMenu()
    })
    btnContact.addEventListener('click', () => {
        div_main.innerHTML = ''
        displayContact()
    })
})