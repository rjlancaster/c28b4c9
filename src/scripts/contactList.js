const ContactList = {

  printToDOM: (obj) => {
    return `
      <section class="contactInfo">
      <h3>${obj.name}</h3>
      <p>${obj.phone}</p>
      <p>${obj.address}</p>
      </section>
      `
  }
}

export default ContactList