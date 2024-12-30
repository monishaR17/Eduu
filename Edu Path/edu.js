// edu.js

document.addEventListener("DOMContentLoaded", () => {
    // Search functionality
    const searchBar = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");

    searchButton.addEventListener("click", () => {
        const query = searchBar.value.trim().toLowerCase();
        if (query) {
            searchPrograms(query);
        } else {
            alert("Please enter a search term.");
        }
    });

    // Search programs
    function searchPrograms(query) {
        const programs = document.querySelectorAll(".program");
        let found = false;

        programs.forEach(program => {
            const title = program.querySelector("h3").textContent.toLowerCase();
            const description = program.querySelector("p").textContent.toLowerCase();

            if (title.includes(query) || description.includes(query)) {
                program.style.display = "block";
                found = true;
            } else {
                program.style.display = "none";
            }
        });

        if (!found) {
            alert("No programs found matching your search.");
        }
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Dynamic welcome message in the home section
    const homeSection = document.querySelector("#home .home-content");
    const welcomeMessage = document.createElement("h3");
    welcomeMessage.textContent = "Start your journey with us today!";
    homeSection.appendChild(welcomeMessage);
});
