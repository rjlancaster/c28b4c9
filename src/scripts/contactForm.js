


const contactForm = document.createElement("DIV")
contactForm.innerHTML = `
<input class="input" type="text" id="name--input">Name:</input> 
<input class="input" type="text" id="phone--input">Phone Number:</input> 
<input class="input" type="text" id="address--input">Address:</input> 
<button id="saveButton">Save</button>
`

const nameInput = $("#name--input").textContent
const phoneInput = $("#phone--input").textContent
const addressInput = $("#address--input").textContent
const saveButton = $("#saveButton")

const textInputToJSON = (name, phone, address) {
  nameInput = name
  phoneInput = phone
  addressInput = address

}



saveButton.addEventListener("click", function() {
 
}