// 1  holdds HTML for form and button.  This should go in contact.js

const contactForm = document.createElement("DIV")
contactForm.innerHTML = `
<input class="input" type="text" id="name--input">Name:</input> 
<input class="input" type="text" id="phone--input">Phone Number:</input> 
<input class="input" type="text" id="address--input">Address:</input> 
<button id="saveButton">Save</button>
`



// 3 Click function that takes text input from form
const nameInput = $("#name--input").textContent
const phoneInput = $("#phone--input").textContent
const addressInput = $("#address--input").textContent
const saveButton = $("#saveButton")

saveButton.addEventListener("click", textInputToJSON())

const textInputToJSON = (name, phone, address) => {
  nameInput = name
  phoneInput = phone
  addressInput = address

}

// 4  const that performs FETCH/POST to JSON
function postContacts() {
  fetch("http://localhost:8088/totalContacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(???)
  })
})



// 5 have click event from 3 interact with PUT from 4

// 6 const that does FETCH/GET from JSON plus does loop.  Each loop prints contact to DOM


const output = document.querySelector(".output")

const printToDOM(obj) = `
  <section class="contactInfo">
  <h3>${obj.name}</h3>
  <p>${obj.phone}</p>
  <p>${obj.address}</p>
  </section>
`

function fetchContacts() {
  fetch("http://localhost:8088/totalContacts")
    .then(jsonData => jsonData.json())
    .then(data => data.forEach(obj => {
        output.append(printToDOM(obj))
      })
  }
}

