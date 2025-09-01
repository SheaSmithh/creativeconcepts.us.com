document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".copy-text").forEach(el => {
        el.addEventListener("click", (event) => {
            event.stopPropagation(); // prevent accidental bubbling
            const textToCopy = el.dataset.copy;
            if (!textToCopy) return; // do nothing if data-copy is empty
            navigator.clipboard.writeText(textToCopy).then(() => {
                const original = el.textContent;
                el.textContent = "Copied!";
                setTimeout(() => {
                    el.textContent = original;
                }, 1500);
            });
        });
    });
});
