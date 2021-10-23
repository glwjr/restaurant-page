import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement("div");
    const name = document.createElement("h2");

    header.classList.add("header");
   
    name.classList.add("restaurant-name");
    name.textContent = "Zora's Kitchen";

    header.appendChild(name);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener('click', () => {
        loadHome();
    });

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener('click', () => {
        loadMenu();
    });

    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Contact";
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
    footer.innerHTML = "Made with ♥ by GW";

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