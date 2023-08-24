window.onload = function () {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarContainer = document.getElementById('navbar-container');
            navbarContainer.innerHTML = data;
        });
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerContainer = document.getElementById('footer-container');
            footerContainer.innerHTML = data;
        })
};

function togglehidden() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
}