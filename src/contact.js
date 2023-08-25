import img from "./imgs/location.png";
import "./style.css";

function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contactContainer");
  const contactUs = document.createElement("div");
  contactUs.classList.add("contactUs");
  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "CONTACT US";

  const contactusInfo = document.createElement("div");
  contactusInfo.classList.add("contactusInfo");

  contactusInfo.appendChild(createInfo("Phone Number: ", "123-456-7890"));
  contactusInfo.appendChild(
    createInfo("Email Address: ", "YYCsmokehouse@gmail.com")
  );
  contactusInfo.appendChild(
    createInfo("Address: ", "225 6 St SW, Calgary, AB T2P 3S1")
  );

  contactUs.appendChild(contactTitle);
  contactUs.appendChild(contactusInfo);

  const hours = document.createElement("div");
  hours.classList.add("hours");
  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "HOURS";

  hours.appendChild(hoursTitle);

  const dates = document.createElement("div");
  dates.classList.add("dates");

  const locationContainer = document.createElement("div");
  locationContainer.classList.add("locationContainer");

  const location = new Image();
  location.classList.add("location");
  location.src = img;

  dates.appendChild(dayHours("Monday", "1:00PM", "10:00PM"));
  dates.appendChild(dayHours("Tuesday", "1:00PM", "10:00PM"));
  dates.appendChild(dayHours("Wednesday", "1:00PM", "10:00PM"));
  dates.appendChild(dayHours("Thursday", "1:00PM", "10:00PM"));
  dates.appendChild(dayHours("Friday", "1:00PM", "1:00AM"));
  dates.appendChild(dayHours("Saturday", "10:00AM", "1:00AM"));
  dates.appendChild(dayHours("Sunday", "10:00AM", "10:00PM"));

  hours.appendChild(dates);

  locationContainer.appendChild(location);

  contact.appendChild(contactUs);
  contact.appendChild(locationContainer);
  contact.appendChild(hours);

  // Fix Whitespace Error
  // contact.appendChild(
  //   createInfo("Address: ", "123 Main Street Queens New York")
  // );

  return contact;
}

function dayHours(day, open, close) {
  const days = document.createElement("p");
  days.textContent = `${day}          ${open} - ${close}`;

  return days;
}

function createInfo(label, text) {
  const createP = document.createElement("p");
  createP.textContent = label + text;

  return createP;
}

export default function loadContact() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createContact());
}
