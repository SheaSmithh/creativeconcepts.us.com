// copy-to-clipboard.js
window.addEventListener("load", () => { // wait until everything loads
    const copyElements = document.querySelectorAll(".copy-text");

    copyElements.forEach(el => {
        el.addEventListener("click", () => {
            const text = el.getAttribute("data-copy");
            if (!text) return;
            
            // Use navigator.clipboard if supported
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    const original = el.textContent;
                    el.textContent = "Copied!";
                    setTimeout(() => {
                        el.textContent = original;
                    }, 1500);
                }).catch(err => {
                    console.error("Copy failed:", err);
                });
            } else {
                // Fallback for older browsers
                const textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                textarea.style.opacity = "0";
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand("copy");
                    const original = el.textContent;
                    el.textContent = "Copied!";
                    setTimeout(() => {
                        el.textContent = original;
                    }, 1500);
                } catch (err) {
                    console.error("Fallback copy failed:", err);
                }
                document.body.removeChild(textarea);
            }
        });
    });
});