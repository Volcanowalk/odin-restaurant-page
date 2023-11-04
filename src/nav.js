const displayNav = () => {
    const div_content = document.querySelector('#content')

    //Add header div
    const div_header = document.createElement('div')
    div_header.classList.add('div-header')

    //Add title
    const title = document.createElement('h1')
    title.innerText = 'Garden Restaurant'
    div_header.appendChild(title)

    //Create nav div
    const div_nav = document.createElement('div')
    div_nav.classList.add('div-nav')
    //Navigation buttons inside the nav div
    const btnHome = document.createElement('button')
    btnHome.innerText = 'Home'
    btnHome.classList.add('btnHome')
    const btnMenu = document.createElement('button')
    btnMenu.innerText = 'Menu'
    btnMenu.classList.add('btnMenu')
    const btnContact = document.createElement('button')
    btnContact.innerText = 'Contact'
    btnContact.classList.add('btnContact')
    div_nav.append(btnHome, btnMenu, btnContact)
    //Add nav div inside header div
    div_header.appendChild(div_nav)

    //Add main div
    const div_main = document.createElement('div')
    div_main.classList.add('div-main')
    
    div_content.appendChild(div_header)
    div_content.appendChild(div_main)
}

export { displayNav }