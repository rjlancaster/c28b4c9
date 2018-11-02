/*
    Author: Richard Lancaster
    Name: contactCollection.js
    Purpose: Component that loads existing contacts from storage, and saves new ones.
*/
const ContactCollection = {

  postContact(newContact) {
    fetch("http://localhost:8088/totalContacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    })
  }
}

export default ContactCollection