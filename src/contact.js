function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.textContent = "Contact Page";

  return contact;
}

export default function loadContact() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createContact());
}
