/*
    Author: Richard Lancaster
    Name: main.js
    Purpose: Entry point of our application
*/

import ContactCollection from "./contactCollection.js"
import ContactForm from "./contactForm.js"

const saveBtn = document.querySelector("#saveBtn")
saveBtn.addEventListener("click", () => {
  let newContact = ContactForm.formatUserInput()
  ContactCollection.postContact(newContact)
})

const output = document.querySelector(".output")

ContactCollection.getContact().then(domString => output.innerHTML = domString)