window.onscroll = function() {show()};

function show() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("button").style.display = "block";
    } else {
        document.getElementById("button").style.display = "none";
    }
}


function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}