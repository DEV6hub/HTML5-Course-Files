window.addEventListener("load", function () {
        document.getElementById('paceoutput').innerHTML = document.getElementById('pace').value;
        document.getElementById("pace").addEventListener("change", function () {
            document.getElementById('paceoutput').innerHTML = this.value;
        }, false);
}, false);