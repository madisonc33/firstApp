var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    alert("From = " + document.getElementById("from").value + "\n" +
        "Email = " + document.getElementById("email").value + "\n" +
        "Subject = " + document.getElementById("subject").value + "\n" +
        "Message = " + document.getElementById("message").value)
});