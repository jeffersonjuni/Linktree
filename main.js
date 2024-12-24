function changeIcon(element, newSrc) {
    element.querySelector('img').src = newSrc;
}

// Remover o foco de links e botões ao clicar
document.querySelectorAll("a, button").forEach(element => {
    element.addEventListener("click", () => {
        setTimeout(() => {
            element.blur(); // Remove o foco do elemento clicado
        }, 100); // Adiciona um pequeno atraso para evitar interferência
    });
});

// Remover o foco ao retornar à página (iOS e outros navegadores)
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        // Remove o foco do elemento ativo
        if (document.activeElement) {
            document.activeElement.blur();
        }
    }
});

// Força o reset de foco adicionalmente no iOS
window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        setTimeout(() => {
            document.activeElement?.blur();
        }, 100); // Adiciona um pequeno atraso para garantir compatibilidade no iOS
    }
});



