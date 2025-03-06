document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

        document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("formAlert").innerHTML = `<div class="alert alert-success">Message Sent Successfully!</div>`;
});
