/*
    Author: Richard Lancaster
    Name: contact.js
    Purpose: Displays a person's name, phone number, and address in the DOM
*/

const printToDOM(obj) {
  return `
  <section class="contactInfo">
  <h3>${obj.name}</h3>
  <p>${obj.phone}</p>
  <p>${obj.address}</p>
  </section>
  `
}

class contact {

  constructor (name, phone, address) {
    this._name = name
    this._phone = phone
    this._address = address
  }
}


