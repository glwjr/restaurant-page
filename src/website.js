import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement("div");
    const name = document.createElement("h2");

    header.classList.add("header");
   
    name.classList.add("restaurant-name");
    name.textContent = "Amaru's Kitchen";

    header.appendChild(name);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const buttons = document.createElement("div");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    buttons.classList.add("buttons");
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";

    homeBtn.addEventListener('click', () => {
        loadHome();
    });

    menuBtn.addEventListener('click', () => {
        loadMenu();
    });

    contactBtn.addEventListener('click', () => {
        loadContact();
    });

    buttons.appendChild(homeBtn);
    buttons.appendChild(menuBtn);
    buttons.appendChild(contactBtn);

    return buttons
}

function createContainer() {
    const container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("id", "container");

    return container
}

function createFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "Created by Gary White";

    return footer;
}

function initializeWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createContainer());
    content.appendChild(createFooter());

    loadHome();
}

export default initializeWebsite;