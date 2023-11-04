import Groundhog from './images/groundhog.jpg'

const displayContact = () => {
    const div_main = document.querySelector('.div-main')
    div_main.style.height = "500px"

    const div_contact = document.createElement('div')
    div_contact.classList.add('div-contact')

    const img = document.createElement('img')
    img.src = Groundhog
    div_contact.appendChild(img)

    const contact_detail = document.createElement('p')
    contact_detail.innerText = "Contact your local groundhog! \n\n 123-456-789 ext. I need cookies"
    div_contact.appendChild(contact_detail)

    div_main.appendChild(div_contact)
}

export { displayContact }