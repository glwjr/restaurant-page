function createContact() {
    const contact = document.createElement("div");

    contact.classList.add("main");

    const sectionTitle = document.createElement("h3");
    sectionTitle.textContent = "Contact Us";

    const separator = document.createElement("p");
    separator.textContent = "–––––––––";

    const paraOne = document.createElement("p");
    paraOne.textContent = "(555) 555-5555";

    const paraTwo = document.createElement("p");
    paraTwo.textContent = "123 North Hemingway Street, Apple Valley, CA 12345"

    const paraThree = document.createElement("p");
    paraThree.innerHTML = `<img id="map" src="./images/map.png">`

    contact.appendChild(sectionTitle);
    contact.appendChild(separator);
    contact.appendChild(paraOne);
    contact.appendChild(paraTwo);
    contact.appendChild(paraThree);

    return contact;
}


function loadContact() {
    const container = document.getElementById('container');
    container.innerHTML = "";

    container.appendChild(createContact());
}

export default loadContact