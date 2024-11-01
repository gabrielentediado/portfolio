function openNav(event) {
    event.stopPropagation();
    document.getElementById("mySidebar").style.width = "250px";
};

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
};

document.addEventListener('click', function(event) {
    if (!document.getElementById("mySidebar").contains(event.target) && !document.querySelector('.Left-side-bar-button').contains(event.target)) {
        closeNav();
    }
});