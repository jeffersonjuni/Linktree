function changeIcon(element, newSrc) {
    element.querySelector('img').src = newSrc;
}

// Remover o foco ao interagir com links e botões
document.querySelectorAll("a").forEach(element => {
    element.addEventListener("click", () => {
        // Aguarda o clique e remove o foco
        setTimeout(() => {
            element.blur();
        }, 100); // Pequeno atraso para evitar interferir na navegação
    });
});

// Remover o foco ao retornar à página
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        const activeElement = document.activeElement;

        // Verifica se o elemento ativo é um link ou botão e remove o foco
        if (activeElement.tagName === "A" || activeElement.tagName === "BUTTON") {
            activeElement.blur();
        }
    }
});


