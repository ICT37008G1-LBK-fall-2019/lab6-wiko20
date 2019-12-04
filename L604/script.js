let studentsList = document.getElementById("student-list");

function addName(list) {
    let input = prompt("Enter name: ");
    
    if(input === null || input == "")
        return false; 
    else {
        let newName = document.createElement("li");
        newName.innerHTML = input;
        list.appendChild(newName);
        return true;
    }
}

while(addName(studentsList));












