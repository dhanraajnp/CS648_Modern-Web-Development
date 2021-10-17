/*eslint-env browser*/

// Old Way
function displayMessage() {
    window.alert("I have been clicked.");
}

// Element Property
window.onload = function () {
    var myElement = document.getElementById("myButton")
        myElement.onclick = function () {
        window.alert("I have been clicked.");
    }
}

// User Defined
function btnOnClick() {
    window.alert("I have been clicked.")
}
window.addEventListener("load", function(){
    var myOtherButton = window.document.getElementById("myButton2")
    myOtherButton.addEventListener("click", btnOnClick);
});

// Call-Back Function
window.addEventListener("load", function(){
    var myOtherButton2 = window.document.getElementById("myButton3")
        myOtherButton2.addEventListener("click", function() {
        window.alert("I have been clicked.")
    });
})