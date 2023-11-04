import Dandelion from './images/dandelion.jpg';
import Leaf from './images/leaves.jpg'
import Seeds from './images/seeds.jpg'
import Garden from './images/garden.jpeg'

const displayMenu = () => {
    const div_main = document.querySelector('.div-main')
    div_main.style.height = "auto"

    //Create menu div
    const div_menu = document.createElement('div')
    div_menu.classList.add('div-menu')
    //Create menuitem divs
    const div_menuItem1 = document.createElement('div')
    div_menuItem1.classList.add('menu-item')

    const div_menuItem2 = document.createElement('div')
    div_menuItem2.classList.add('menu-item')

    const div_menuItem3 = document.createElement('div')
    div_menuItem3.classList.add('menu-item')

    const div_menuItem4 = document.createElement('div')
    div_menuItem4.classList.add('menu-item')

    //Each menu item gets a name and a picture
    const img1 = document.createElement('img')
    img1.src = Dandelion
    const menu_name1 = document.createElement('div')
    menu_name1.innerText = 'Flowers'

    const img2 = document.createElement('img')
    img2.src = Leaf
    const menu_name2 = document.createElement('div')
    menu_name2.innerText = 'Leaf'

    const img3 = document.createElement('img')
    img3.src = Seeds
    const menu_name3 = document.createElement('div')
    menu_name3.innerText = 'Seeds'

    const img4 = document.createElement('img')
    img4.src = Garden
    const menu_name4 = document.createElement('div')
    menu_name4.innerText = 'Garden specialty'

    div_menuItem1.append(img1, menu_name1)
    div_menuItem2.append(img2, menu_name2)
    div_menuItem3.append(img3, menu_name3)
    div_menuItem4.append(img4, menu_name4)


    //Add menu item divs inside menu div

    div_menu.append(div_menuItem1, div_menuItem2, div_menuItem3, div_menuItem4)

    div_main.appendChild(div_menu)
}

export { displayMenu }