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

const studentList = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const headerRow: HTMLTableRowElement = table.insertRow();
const header1: HTMLTableCellElement = document.createElement("th");
const header2: HTMLTableCellElement = document.createElement("th");

header1.textContent = "First Name";
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);

studentList.forEach((student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const nameCell: HTMLTableCellElement = row.insertCell();
  const locationCell: HTMLTableCellElement = row.insertCell();

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
