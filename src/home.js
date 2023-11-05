const displayHome = () => {
    const div_main = document.querySelector('.div-main')

    //Greeting text
    const txtGreeting = document.createElement('p')
    txtGreeting.classList.add('txtGreeting')
    txtGreeting.innerText = 'WELCOME TO GARDEN'
    div_main.appendChild(txtGreeting)

    //Text area below greeting text
    const txtDetail = document.createElement('div')
    txtDetail.classList.add('txtDetail')
    txtDetail.innerText = 'Garden restaurant offers various plants, flowers, and seeds for forest animals! \n\n Humans are also welcomed here, but they rarely like our menu.'
    div_main.appendChild(txtDetail)

    div_main.style.height = "500px"
}

export { displayHome }