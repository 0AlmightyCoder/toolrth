// slide card by clicking the left and right buttons. Each card represents a different tool or feature that we offer, allowing you to easily browse through our selection and find the perfect tool for your needs.

const cardArray = document.getElementsByClassName('scroll-card');

for (let i = 0; i < cardArray.length; i++) {
    console.log("cardArray have " + cardArray.length + " elements");
}
function scrollCards() {
}

// function to show selected files
function showSelectedFiles() {
    arrFiles = document.getElementById("fileupload").files;
    for (let i = 0; i < arrFiles.length; i++) {
        console.log("Selected file: ", arrFiles[i].name);
    }
    console.log("Selected files: ", arrFiles.length);
}