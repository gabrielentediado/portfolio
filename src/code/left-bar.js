function openNav(event) {
    document.getElementById("mySidebar").style.width = "240px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

var count = 0
sidebar = document.getElementById("mySidebar")
left_bar_button = document.querySelector('.Left-side-bar-button')

document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !left_bar_button.contains(event.target)) {
        closeNav()
    }
})

document.addEventListener('click', function(event){
    count++
    if(count % 2 || count == 0){
        openNav()
    }else{
        closeNav()
    }
})