interface student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: student = {
  firstName: "Eleanya",
  lastName: "Onuma",
  age: 25,
  location: "Nigeria",
};

const student2: student = {
  firstName: "Nneoma",
  lastName: "Irebo",
  age: 24,
  location: "Nigeria",
};

const studentList: student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");
headerRow.innerHTML = "<th>First Name</th><th>Location</th>";
table.appendChild(headerRow);

studentList.forEach((student) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(row);
});

document.body.appendChild(table);
