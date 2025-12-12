var math = document.getElementById("math");
var english = document.getElementById("english");
var submitBtn = document.getElementById("submitBtn");
var tableBody = document.getElementById("tableBody");

let counter = 1;

submitBtn.addEventListener("click", function(){
    var mathValue = math.value;
    var englishValue = english.value;

    if (mathValue === "" || englishValue === "") {
        alert("請輸入數字！");
        return;
    }
    if (mathValue < 0 || mathValue > 100 || englishValue < 0 || englishValue > 100) {
    alert("請輸入 0~100 的分數！");
    return;
    }
    var avg = ((parseFloat(mathValue) + parseFloat(englishValue)) / 2).toFixed(2);
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${counter}</td>
        <td>${mathValue}</td>
        <td>${englishValue}</td>
        <td>${avg}</td>`;
    tableBody.appendChild(newRow);
    counter++;

    updateColumnAverages()
    math.value = "";
    english.value = "";
});

function updateColumnAverages() {
    var rows = tableBody.querySelectorAll("tr");
    if (rows.length === 0) return;

    var totalMath = 0;
    var totalEng = 0;
    var totalAvg = 0;

    rows.forEach(function(row) {
        var cells = row.querySelectorAll("td");
        totalMath += parseFloat(cells[1].textContent);
        totalEng += parseFloat(cells[2].textContent);
        totalAvg += parseFloat(cells[3].textContent);
    });

    var count = rows.length;

    document.getElementById("mathAvg").textContent = (totalMath / count).toFixed(2);
    document.getElementById("engAvg").textContent = (totalEng / count).toFixed(2);
    document.getElementById("overallAvg").textContent = (totalAvg / count).toFixed(2);
}

