window.onload = function () {
    fetch('../dist/navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarContainer = document.getElementById('navbar-container');
            navbarContainer.innerHTML = data;
        });
};