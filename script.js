function calPer() {
  var percentage =
    ((engMarks + mathMarks + urduMarks + compMarks + phyMarks) / 500) * 100;
  return percentage;
}
var userPercent = calPer;

var userName = prompt("Enter your name");
if (userName == "") {
  alert("Please Enter Your Name");
}

var mainDiv = document.getElementById("main-div");
var engMarks = Number(prompt("Enter English Subject Marks"));
var mathMarks = Number(prompt("Enter Maths Subject Marks"));
var urduMarks = Number(prompt("Enter Urdu Subject Marks"));
var compMarks = Number(prompt("Enter Computer Subject Marks"));
var phyMarks = Number(prompt("Enter Physics Subject Marks"));

var h1 = document.createElement("h1");
h1.innerText = "Marksheet";
mainDiv.appendChild(h1);

// Creation and assigning of result variable give him class and make him append child of main div
var result = document.createElement("div");
result.setAttribute("class", "studentResult");
mainDiv.appendChild(result);

// Status row of student name, percentage, grade and scholarship discount
var studentFrontName = document.createElement("p");
studentFrontName.innerText = "Student Name : " + userName;
result.appendChild(studentFrontName);

var percentage = document.createElement("p");
percentage.innerText = "Percentage : " + userPercent();
result.appendChild(percentage);

var grade = document.createElement("p");
if (userPercent() >= 80) {
  grade.innerText = "Grade"+" "+"A+";
} else if (userPercent() >= 80 && userPercent() < 101) {
  grade.innerText = "Grade" + " " + "A";
} else if (userPercent() >= 70 && userPercent() < 79) {
  grade.innerText = "Grade" + " " + "B+";
} else if (userPercent() >= 51 && userPercent() < 69) {
  grade.innerText = "Grade : C";
} else if (userPercent() >= 20 && userPercent() < 50) {
  grade.innerText = "Grade : D";
} else {
  grade.innerText = "Grade : E";
}
result.appendChild(grade);

var userSS = document.createElement("p");
if (userPercent() >= 85) {
  userSS.innerText = "Scholarship Status : 50% Discount";
} else {
  userSS.innerText = "Scholarship Status : Sorry! No Discount";
}
result.appendChild(userSS);


var tableElement = document.createElement("table");
tableElement.setAttribute("border", "1");
mainDiv.appendChild(tableElement);

var tableRow1 = document.createElement("tr");
tableElement.appendChild(tableRow1);

var tableHeading1 = document.createElement("th");
tableHeading1.innerText = "Subject Name";

var tableHeading2 = document.createElement("th");
tableHeading2.innerText = "Total Marks";

var tableHeading3 = document.createElement("th");
tableHeading3.innerText = "Obtained Marks";

var tableHeading4 = document.createElement("th");
tableHeading4.innerText = "Status";

tableRow1.appendChild(tableHeading1);
tableRow1.appendChild(tableHeading2);
tableRow1.appendChild(tableHeading3);
tableRow1.appendChild(tableHeading4);

var tableRow2 = document.createElement("tr");
tableElement.appendChild(tableRow2);

var tableHeadingR2_1 = document.createElement("td");
tableHeadingR2_1.innerText = "Maths";

var tableHeadingR2_2 = document.createElement("td");
tableHeadingR2_2.innerText = "100";

var tableHeadingR2_3 = document.createElement("td");
tableHeadingR2_3.innerText = mathMarks;

var tableHeadingR2_4 = document.createElement("td");
if (mathMarks >= 40) {
  tableHeadingR2_4.innerText = "Pass";
} else {
  tableHeadingR2_4.innerText = "Fail";
}

tableRow2.appendChild(tableHeadingR2_1);
tableRow2.appendChild(tableHeadingR2_2);
tableRow2.appendChild(tableHeadingR2_3);
tableRow2.appendChild(tableHeadingR2_4);

var tableRow3 = document.createElement("tr");
tableElement.appendChild(tableRow3);

var tableHeadingR3_1 = document.createElement("td");
tableHeadingR3_1.innerText = "English";

var tableHeadingR3_2 = document.createElement("td");
tableHeadingR3_2.innerText = "100";

var tableHeadingR3_3 = document.createElement("td");
tableHeadingR3_3.innerText = engMarks;

var tableHeadingR3_4 = document.createElement("td");
if (engMarks >= 40) {
  tableHeadingR3_4.innerText = "Pass";
} else {
  tableHeadingR3_4.innerText = "Fail";
}

tableRow3.appendChild(tableHeadingR3_1);
tableRow3.appendChild(tableHeadingR3_2);
tableRow3.appendChild(tableHeadingR3_3);
tableRow3.appendChild(tableHeadingR3_4);

// Fourth row of table starts from here
var tableRow4 = document.createElement("tr");
tableElement.appendChild(tableRow4);

var tableHeadingR4_1 = document.createElement("td");
tableHeadingR4_1.innerText = "Urdu";

var tableHeadingR4_2 = document.createElement("td");
tableHeadingR4_2.innerText = "100";

var tableHeadingR4_3 = document.createElement("td");
tableHeadingR4_3.innerText = urduMarks;

var tableHeadingR4_4 = document.createElement("td");
if (urduMarks >= 40) {
  tableHeadingR4_4.innerText = "Pass";
} else {
  tableHeadingR4_4.innerText = "Fail";
}

tableRow4.appendChild(tableHeadingR4_1);
tableRow4.appendChild(tableHeadingR4_2);
tableRow4.appendChild(tableHeadingR4_3);
tableRow4.appendChild(tableHeadingR4_4);

// Fifth row table starts from here
var tableRow5 = document.createElement("tr");
tableElement.appendChild(tableRow5);

var tableHeadingR5_1 = document.createElement("td");
tableHeadingR5_1.innerText = "Computer";

var tableHeadingR5_2 = document.createElement("td");
tableHeadingR5_2.innerText = "100";

var tableHeadingR5_3 = document.createElement("td");
tableHeadingR5_3.innerText = compMarks;

var tableHeadingR5_4 = document.createElement("td");
if (compMarks >= 40) {
  tableHeadingR5_4.innerText = "Pass";
} else {
  tableHeadingR5_4.innerText = "Fail";
}

tableRow5.appendChild(tableHeadingR5_1);
tableRow5.appendChild(tableHeadingR5_2);
tableRow5.appendChild(tableHeadingR5_3);
tableRow5.appendChild(tableHeadingR5_4);
21
var tableRow6 = document.createElement("tr");
tableElement.appendChild(tableRow6);

var tableHeadingR6_1 = document.createElement("td");
tableHeadingR6_1.innerText = "Physics";

var tableHeadingR6_2 = document.createElement("td");
tableHeadingR6_2.innerText = "100";

var tableHeadingR6_3 = document.createElement("td");
tableHeadingR6_3.innerText = phyMarks;

var tableHeadingR6_4 = document.createElement("td");
if (phyMarks >= 40) {
  tableHeadingR6_4.innerText = "Pass";
} else {
  tableHeadingR6_4.innerText = "Fail";
}

tableRow6.appendChild(tableHeadingR6_1);
tableRow6.appendChild(tableHeadingR6_2);
tableRow6.appendChild(tableHeadingR6_3);
tableRow6.appendChild(tableHeadingR6_4);
