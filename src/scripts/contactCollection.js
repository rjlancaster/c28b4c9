/*
    Author: Richard Lancaster
    Name: contactCollection.js
    Purpose: Component that loads existing contacts from storage, and saves new ones.
*/

import ContactList from "./contactList.js"

const ContactCollection = {

  getContact: () => {
    fetch("http://localhost:8090/totalContacts")
      .then(jsonData => jsonData.json())
      .then(data => data.forEach(obj => {
        console.log(obj);
        let test = ContactList.printToDOM(obj)
        return test
      }))
  },
  postContact: (newContact) => {
    fetch("http://localhost:8090/totalContacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    })
  }
}

export default ContactCollection