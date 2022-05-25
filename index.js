function createContainer () {
    const container = document.createElement ("div");
    container.classList.add('container');
    document.body.appendChild(container);
    return container;
}


function init() {
    const container = createContainer();
    createHeader(container);
    createMain(container);
    createFooter(container);
    //director de orquesta
}

window.onload = init