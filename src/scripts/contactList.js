const ContactList = {

  printToDOM: (obj) =>{
      `
      <section class="contactInfo">
      <h3>${obj.name}</h3>
      <p>${obj.phone}</p>
      <p>${obj.address}</p>
      </section>
      `
}

export default ContactList