document.addEventListener('DOMContentLoaded', function () {
    const el = document.getElementById('current-date');
    if (!el) return;
    const now = new Date();
    el.textContent = now.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
});
