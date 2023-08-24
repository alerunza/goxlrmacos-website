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

function downloadAndRedirect() {
    var link = document.createElement("a");
    link.href = "https://github.com/AdelaideSky/GoXlr-Macos/releases/download/v2.1.1/GoXlr.App.2.1.1.zip";
    link.download = "GoXlr.App.2.1.1.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(function() {
        window.location.href = "download.html";
    }, 1000);
}