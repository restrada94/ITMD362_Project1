// The function below is called by the form submit button in index.html, so no need to call it from this file.

function process() {
    var firstName = $("#firstname").val();
    var lastName = $("#lastname").val();
    var email = $("#email").val();

    if(firstname == ""){
        alert("Please enter a first name.");
    }
    if(lastname == ""){
        alert("Please enter a last name.");
    }
    if(email == ""){
        alert("Please enter an e-mail address.");
    }
    alert("Successfully submitted! Thanks!");
 }