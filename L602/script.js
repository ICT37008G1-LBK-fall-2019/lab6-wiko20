function insertAfter(elem, refElem) {
    let parent = refElem.parentElement;
    parent.insertBefore(elem, refElem.nextSibling)
} 

let newDiv = document.createElement('div');
newDiv.className = "new-div";
newDiv.innerHTML = "New div";

let firstDiv = document.body.querySelector("#first");

insertAfter(newDiv, secondDiv);