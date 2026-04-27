
// access elements by id
const fileInput = document.getElementById("fileupload");
const fileList = document.getElementById("file-count");


fileInput.addEventListener("change", function() {
    // const files = Array.from(fileInput.files);
    const files = Array.from(this.files);
    fileList.textContent = `${files.length} file(s) selected`;
    console.log("Files: ", files);

    // testing dynamic creation of selected file elements
    for (let i = 0; i < files.length; i++) {
        console.log("Creating element for file: ", files[i].name);
        createSelectedFileElement(files[i]);
    }
});

// function creating custom selected file list
// start---------------------------------------------------------------------------------------------------------

// close symbol unicode: &#x2715; or \u2715
const closeSymbol = "\u2715";

function createSelectedFileElement(fileName) {
    const currentDiv = document.getElementById("files-list");
    const createDiv = document.createElement("div");
    // createDiv.className = "selected-files";
    createDiv.classList.add("selected-files", "flex");

    // calling function to create span element for file name
    const fileNameSpan = createSpan(fileName[0]);
    createDiv.appendChild(fileNameSpan);

    // calling function to create span element for close symbol
    const closeBtn = createCloseSymbol();
    createDiv.appendChild(closeBtn);

    currentDiv.appendChild(createDiv);
    console.log("Selected file element created");
}

// function creating span element to show file name
function createSpan(name) {
    const showFileName = document.createElement("span");
    showFileName.textContent = name;
    return showFileName; // return element here
}

// function creating span element for close symbol
function createCloseSymbol() {
    const closeBtn = document.createElement("span");
    closeBtn.textContent = closeSymbol;
    closeBtn.className = "remove-file";
    return closeBtn;
}

// end------------------------------------------------------------------------------------------------------------

function removeFile() {

}

