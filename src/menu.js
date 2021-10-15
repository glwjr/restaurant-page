function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("main");

    const menuTitle = document.createElement("h3");
    menuTitle.textContent = "Menu"

    const separator = document.createElement("p");
    separator.textContent = "–––––––––"

    const itemOne = document.createElement("p");
    itemOne.classList.add("title");
    itemOne.textContent = "Spicy Fried Rice";

    const itemOneDescription = document.createElement("p");
    itemOneDescription.classList.add("description");
    itemOneDescription.textContent = "Egg, pepper, scallion, basil, and onion."

    const itemTwo = document.createElement("p");
    itemTwo.classList.add("title");
    itemTwo.textContent = "Spicy Coconut Noodle";

    const itemTwoDescription = document.createElement("p");
    itemTwoDescription.classList.add("description");
    itemTwoDescription.textContent = "Beef and rice noodles in a curry sauce with fried shallot, cilantro, fried tofu, scallions, and boiled egg."

    const itemThree = document.createElement("p");
    itemThree.classList.add("title");
    itemThree.textContent = "Mongolian Beef";

    const itemThreeDescription = document.createElement("p");
    itemThreeDescription.classList.add("description");
    itemThreeDescription.textContent = "Flank steak slices with scallions, crispy noodles, vegetables mongolia, and teriyaki sauce. Served with jasmine rice and your choice of soup or salad."

    const itemFour = document.createElement("p");
    itemFour.classList.add("title");
    itemFour.textContent = "Roast Duck";

    const itemFourDescription = document.createElement("p");
    itemFourDescription.classList.add("description");
    itemFourDescription.textContent = "Crispy duck topped with red curry. Served with jasmine rice and your choice of soup or house salad."
    
    menu.appendChild(menuTitle);
    menu.appendChild(separator);
    menu.appendChild(itemOne);
    menu.appendChild(itemOneDescription);
    menu.appendChild(itemTwo);
    menu.appendChild(itemTwoDescription);
    menu.appendChild(itemThree);
    menu.appendChild(itemThreeDescription);
    menu.appendChild(itemFour);
    menu.appendChild(itemFourDescription);

    return menu;
}


function loadMenu() {
    const container = document.getElementById('container');
    container.innerHTML = "";

    container.appendChild(createMenu());
}

export default loadMenu