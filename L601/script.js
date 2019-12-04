let attrToFind = prompt("Enter students id:");
let elements = document.body.children;
console.log(elements);

for (const element of elements) {
    if(element.getAttribute("data-student-id") == attrToFind) {
        element.style = "background-color: green";
    }
}