window.addEventListener("load", function () {
    if (Modernizr.inputtypes.range) {
        document.getElementById('paceoutput').innerHTML = document.getElementById('pace').value;
        document.getElementById("pace").addEventListener("change", function () {
            document.getElementById('paceoutput').innerHTML = this.value;
        }, false);
    }
}, false);