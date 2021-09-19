function click() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            document.getElementById("Text").innerText += xhttp.responseText;
        }
    }

    xhttp.open("GET", "click");
    xhttp.send();
};

document.addEventListener("mousedown", click);  