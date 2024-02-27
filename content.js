let totalEcts = 0;
let gradeSum = 0;

const exam = document.querySelectorAll(".DataSelect");

exam.forEach((elem) => {
  const grade = parseFloat(elem.children[2].textContent);
  const ects = parseFloat(elem.children[4].textContent);

  if (!isNaN(grade)) {
    gradeSum += grade * ects;
    totalEcts += ects;
  }
});

const average = gradeSum / totalEcts;

const table = document.getElementById("resultTable");
const tbody = table.getElementsByTagName("tbody")[0];

const newRowHTML = `
  <tr class="DataSelect" title="Detaljer for resultatet">
    <td class="DataValue" valign="top"> <strong>Weighted Average:</strong></td>
    <td class="DataValue" align="center" valign="top"></td>
    <td class="DataValue" valign="top" align="center"><strong>${average.toFixed(1)}&nbsp;&nbsp;</strong></td>
    <td class="DataValue" align="center" valign="top"></td>
    <td class="DataValue" align="right" valign="top"></td>
  </tr>
`;

tbody.innerHTML += newRowHTML;