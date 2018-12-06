/*THIS IS CODE FROM W3SCHOOLS*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/*THIS IS MY OWN JS CODE*/
function validateForm() {
    var x = document.getElementById("username").value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else {
    	alert("Hello " + x+". Please email me your comments.");
    }
}