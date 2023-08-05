export function higlightMenu() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function handleIntersection(entries) {
        entries.map((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => link.classList.remove("active"));
                const id = entry.target.id;
                console.log(entry.target)
                const link = document.querySelector(`a[href="#${id}"]`);
                link.classList.add("active");
            }
        });
    }
    const observer = new IntersectionObserver(handleIntersection, { rootMargin: "-100px", treshold: 0.25 });

    sections.forEach((section) => {
        observer.observe(section);
    });
}