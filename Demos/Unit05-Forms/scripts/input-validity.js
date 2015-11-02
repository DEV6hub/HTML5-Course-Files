function check(input) {
    var type = input.getAttribute('type');
    if (input.type == "text") {
        alert(type + " type not supported.");
    } else if (input.validity.valid) {
        alert(input.value + " is a valid " + input.type);
    } else {
        alert(input.value + " is NOT a valid " + input.type);
    }
}