let listContainer = document.getElementById("student-list");

let students = [
    { FirstName: 'დავით', LastName: 'წულუკიძე', PersonalNumber: '123'},
    { FirstName: 'მიხილ', LastName: 'კაპანაძე', PersonalNumber: '124'},
    { FirstName: 'სოფო', LastName: 'დოღონაძე', PersonalNumber: '125'}
];

function displayStudentsTable (studentList) {
    let table = document.createElement("table");
    table.style = "border-collapse: collapse";
    listContainer.appendChild(table);

    let row = document.createElement("tr")
    table.appendChild(row);
    for (const key of Object.keys(students[0])) {
        let heading = document.createElement("th");
        heading.style = "border: 1px solid black";
        heading.innerHTML = key;
        row.appendChild(heading);
    }

    studentList.map(student => {
        let row = document.createElement("tr")
        table.appendChild(row);
        for (const value of Object.values(student)) {
            let cell = document.createElement("td");
            cell.style = "border: 1px solid black";
            cell.innerHTML = value;
            row.appendChild(cell);
        }
    })
}

displayStudentsTable(students);