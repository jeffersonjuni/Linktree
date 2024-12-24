function changeIcon(element, newSrc) {
    element.querySelector('img').src = newSrc;
}

// Remover foco ao voltar de um app
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        const activeElement = document.activeElement;

        // Verifica se o elemento ativo é um link ou botão e remove o foco
        if (activeElement.tagName === "A" || activeElement.tagName === "BUTTON") {
            activeElement.blur();
        }
    }
});

