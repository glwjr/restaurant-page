function createHome() {
    const home = document.createElement("div");

    home.classList.add("main");

    const sectionTitle = document.createElement("h3");
    sectionTitle.textContent = "Est. 1994"

    const separator = document.createElement("p");
    separator.textContent = "–––––––––"

    const paraOne = document.createElement("p");
    paraOne.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mattis sem. Curabitur iaculis in enim at luctus. Cras ut nisl nec arcu tempus convallis. Mauris sollicitudin a massa at eleifend. Sed suscipit suscipit elementum. Fusce quis vestibulum purus. Donec porttitor congue justo, eu dignissim ligula ornare in."

    home.appendChild(sectionTitle);
    home.appendChild(separator);
    home.appendChild(paraOne);

    return home;
}


function loadHome() {
    const container = document.getElementById('container');
    container.innerHTML = "";

    container.appendChild(createHome());
}

export default loadHome