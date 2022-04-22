let isEditMode = false;

function toggleEditMode() {
    isEditMode = !isEditMode
    if (isEditMode == true) {
        document.querySelector("body").classList.remove("view-mode")
        document.querySelector("body").classList.add("edit-mode")
        alert("редактирование активированно")
    } else {
        alert("редактирование завершено")
    }
}

document.querySelector("div.edit-button").addEventListener("click", toggleEditMode)

const ROW_COUNT = 20;
const COLUMNS = 20;
const ROW_HEIGHT = 100/ROW_COUNT;
const COLUMNS_WIDTH = 100/COLUMNS;
for (let x = 0; x < ROW_COUNT; x++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.style.height = ROW_HEIGHT + "%";

    for (let y = 0; y < COLUMNS; y++) {
        let col = document.createElement("div");
        col.classList.add("colonne");
        col.style.width = COLUMNS_WIDTH + "%";
        col.setAttribute("data-x", x);
        col.setAttribute("data-y", y);
        // col.onclick = mapClick;
        col.addEventListener('click', mapClick);                
        col.addEventListener('mouseover', mapHover);
        row.append (col);
    }


    let container=document.querySelector(".container");
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
    let ss = "data-x" + "data-y"; // "data-xdata-y"
    let x = event.target.getAttribute("data-x");
    let y = event.target.getAttribute("data-y");
    alert("X="+x+" "+"Y="+y);
}

function mapHover(event) {
    let hoverTargetX = parseInt(
        event.target.getAttribute(
            "data-x"
        )
    ); // 7
    let hoverTargetY = parseInt(event.target.getAttribute("data-y")); // 10
    let allCols = document.querySelectorAll(".colonne");

    // put code her
    for (let i = 0; i < allCols.length; i++) {
        let currentCole = allCols[i];

        currentCole.classList.remove("select");

        let currentX = currentCole.getAttribute("data-x");
        let currentY = currentCole.getAttribute("data-y");

        if (
            currentX >= hoverTargetX - 1
            && currentX <= hoverTargetX + 1
            && currentY >= hoverTargetY - 1
            && currentY <= hoverTargetY + 1
        ) {
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