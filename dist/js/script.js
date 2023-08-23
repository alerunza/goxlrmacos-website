window.onload = function () {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarContainer = document.getElementById('navbar-container');
            navbarContainer.innerHTML = data;
        });
};

function togglehidden() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
}