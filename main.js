function changeIcon(element, newSrc) {
    element.querySelector('img').src = newSrc;
}

window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        window.location.reload(); // Recarrega a página completamente
    }
});
