function changeHeaderText() {
    var date = new Date();
    var seconds = date.getSeconds();

    var t = "Hello! I'm a ";
    if (seconds % 3 == 0) {
        $("#bio").text(t + "programmer.");
    } else if (seconds % 5 == 0) {
        $("#bio").text(t + "developer.");
    } else if (seconds % 4 == 0) {
        $("#bio").text(t + "student.");
    } else {
        $("#bio").text(t + "bunny's owner.");
    }

    setTimeout(function() {
        changeHeaderText();
    }, 2550);
}
changeHeaderText();