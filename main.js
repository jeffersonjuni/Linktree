function changeIcon(element, newSrc) {
    element.querySelector('img').src = newSrc;
}

window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        location.reload(); // Atualiza a página se for uma reexibição do cache
    }
});




