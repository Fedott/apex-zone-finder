var isEditMode = false;
function toggleEditMode() {
    isEditMode = !isEditMode;
    if (isEditMode == true) {
        document.querySelector("body").classList.remove("view-mode");
        document.querySelector("body").classList.add("edit-mode");
        alert("редактирование активированно");
    }
    else {
        alert("редактирование завершено");
    }
}
document.querySelector("div.edit-button").addEventListener("click", toggleEditMode);
var ROW_COUNT = 20;
var COLUMNS = 20;
var ROW_HEIGHT = 100 / ROW_COUNT;
var COLUMNS_WIDTH = 100 / COLUMNS;
for (var x = 0; x < ROW_COUNT; x++) {
    var row = document.createElement("div");
    row.classList.add("row");
    row.style.height = ROW_HEIGHT + "%";
    for (var y = 0; y < COLUMNS; y++) {
        var col = document.createElement("div");
        col.classList.add("colonne");
        col.style.width = COLUMNS_WIDTH + "%";
        col.setAttribute("data-x", x.toString());
        col.setAttribute("data-y", y.toString());
        // col.onclick = mapClick;
        col.addEventListener('click', mapClick);
        col.addEventListener('mouseover', mapHover);
        row.append(col);
    }
    var container = document.querySelector(".container");
    container.append(row);
}
/*
function squrt(number) {
    return number ^ 2;
}

let s = squrt(4); // 16

let x = "77";
let y = "88";

let object = {  // 0x847593hbjfdhg4 == 0x123
    "data-x": "77", // type: string // size: 4 = 0x123
    "data-cc": true, // type: bool  // size: 1 == 0x127
    "data-y": "88", // type: string // size: 4 = 0x128
} */
function mapClick(event) {
    var ss = "data-x" + "data-y"; // "data-xdata-y"
    var x = event.target.getAttribute("data-x");
    var y = event.target.getAttribute("data-y");
    alert("X=" + x + " " + "Y=" + y);
}
function mapHover(event) {
    var hoverTargetX = parseInt(event.target.getAttribute("data-x")); // 7
    var hoverTargetY = parseInt(event.target.getAttribute("data-y")); // 10
    var allCols = document.querySelectorAll(".colonne");
    // put code her
    for (var i = 0; i < allCols.length; i++) {
        var currentCole = allCols[i];
        currentCole.classList.remove("select");
        var currentXString = currentCole.getAttribute("data-x");
        var currentYString = currentCole.getAttribute("data-y");
        var currentX = parseInt(currentXString);
        var currentY = parseInt(currentYString);
        if (currentX >= hoverTargetX - 1
            && currentX <= hoverTargetX + 1
            && currentY >= hoverTargetY - 1
            && currentY <= hoverTargetY + 1) {
            currentCole.classList.add("select");
        }
    }
}
/**
 * Стек вызова
 * | 3 | <- call getAttribute
 * | 5 | <- call parseInt
 * | 1 | <- set var value
 * ____
 */
/**
 * [5,6,7,8,3,34,54,6,457,4,7,46] // 13
 *  0,1,2,3,4,5,6,7,8,9,10,11,12
 *  i < 13
 *  i == 12
 *  i == 13 < 13
 *
 *   1b      1b      1b
 *  '0x2222''0x3333''0x4444'
 */ 
