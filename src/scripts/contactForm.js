
const ContactForm = {
  // create function that does all this and returns the form
  formatUserInput: () => {
    const nameInput = $("#name--input").val()
    const phoneInput = $("#phone--input").val()
    const addressInput = $("#address--input").val()
    const contactToSave = {
      name: nameInput,
      phone: phoneInput,
      address: addressInput
    }
    return contactToSave
  }
}

export default ContactForm