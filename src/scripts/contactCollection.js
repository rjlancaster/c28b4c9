/*
    Author: Richard Lancaster
    Name: contactCollection.js
    Purpose: Component that loads existing contacts from storage, and saves new ones.
*/

// class contact {

//   constructor(name, phone, address) {
//     this._name = name
//     this._phone = phone
//     this._address = address
//     this._id = contact.incrementId()
//   }

//   static incrementId() {
//     if (!this.latestId) this.latestId = 1
//     else this.latestId++
//     return this.latestId
//   }

// }
// fetch("http://localhost:8088/totalContacts/", {
//   method: "FETCH",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON:stringify()
// }

// const contactFactory = (name, phone, address) => new contact(name, phone, address)

// export default contactFactory

function fetchContacts() {
  fetch("http://localhost:8088/totalContacts")
  .then(jsonData => jsonData.json())
  .then(data => 
  }
}


function postContacts() {
  fetch("http://localhost:8088/totalContacts/")
  .then(jsonData => jsonData.json())
  .then(data => {
    savedContactObject = {
      name: data.name,
      address: data.address,
      phone: data.phone
    }
    fetch("http://localhost:8088/totalContacts", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(savedContactObject)
    })
  })
