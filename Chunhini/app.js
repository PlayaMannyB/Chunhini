// Smooth page fade-in on load
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    // Add fade-out effect to all HTML page links
    document.querySelectorAll("a").forEach(link => {
        if (link.href && link.href.includes(".html")) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const href = this.href;

                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = href;
                }, 400);
            });
        }
    });
});
