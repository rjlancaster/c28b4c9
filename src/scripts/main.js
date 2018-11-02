/*
    Author: Richard Lancaster
    Name: main.js
    Purpose: Entry point of our application
*/

import ContactCollection from "./contactCollection.js"
// import ContactFactory from "./contact.js"
// import ContactList from "./contactList.js"
import ContactForm from "./contactForm.js"

// output.append(fetchContacts())

const saveBtn = $("#saveBtn")
saveBtn.addEventListener("click", () => {
  let newContact = ContactForm.formatUserInput()
  ContactCollection.postContact(newContact)
})