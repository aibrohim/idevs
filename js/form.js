const contactForm = document.querySelector(".contact__form");
const message = document.querySelector(".contact__message")

contactForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const {
    name: {
      value: nameValue
    }, 
    mail: {
      value: mailValue
    }, 
    message: {
      value: messageValue
    },  
    service: {
      value: serviceValue
    }} = evt.target.elements;
  
  if (nameValue && mailValue && messageValue && serviceValue) {
    message.textContent = "Alright! We can successfully send the data!"
    message.classList.add("contact__message--success")
    message.classList.remove("contact__message--error")
  } else {
    message.textContent = "Error! We cannot send the data!"
    message.classList.add("contact__message--error")
    message.classList.remove("contact__message--success")
  }
})