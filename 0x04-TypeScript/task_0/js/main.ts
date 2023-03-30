interface Student{
    firstName : string;
    lastName : string;
    age : number;
    location :string;
}
const studentsList : Student[] = [
    {firstName : "kaleab", lastName : "shiferaw", age : 23, location : "Aleltu"},
    {firstName : "mihiretu", lastName : "Endeshaw", age : 23, location: "Debrebirihan"}
]

const table_body = document.querySelector("tbody");
for(let i = 0; i <= studentsList.length; i++)
{
    const row = document.createElement("tr");
    const firstName = document.createElement("td");
    const Location = document.createElement("td");


    firstName.textContent = studentsList[i].firstName;
    Location.textContent = studentsList[i].location;

    row.appendChild(firstName);
    row.appendChild(Location);
    table_body.appendChild(row);
}