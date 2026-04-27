
// load header
function loadMasterPage() {
    // alert("loading...");
    // console.log("Loading header...");


    // fetch('http://127.0.0.1:5500/static/include/masterpage.html')
    fetch('../include/masterpage.html')
    // fetch('/static/include/masterpage.html')
    .then(response => response.text())
    .then(data => {

        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");

        // console.log("data what we get: ", data);
        // alert("data what we get: " + data);
        // document.getElementById('header').innerHTML = data;

        const header = doc.getElementById("site-header").innerHTML;
        const footer = doc.getElementById("site-footer").innerHTML;

        document.getElementById("header").innerHTML = header;
        document.getElementById("footer").innerHTML = footer;

    })
        .catch(err => console.error(err));
}

