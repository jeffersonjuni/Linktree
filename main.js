function changeIcon(element, newSrc) {
    element.querySelector('img').src = newSrc;
}

// Remove o estado de foco dos links ao recarregar ou retornar à página
window.addEventListener("pageshow", () => {
    const activeElement = document.activeElement;

    // Verifica se o elemento ativo é um link ou botão e remove o foco
    if (activeElement.tagName === "A" || activeElement.tagName === "BUTTON") {
        activeElement.blur();
    }
});

