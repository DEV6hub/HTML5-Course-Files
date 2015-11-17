function check() {
    var input = document.createElement("input");
    if (input.validity) {
        alert("validity is supported");
    } else {
        alert("validity is NOT supported");
    }
}