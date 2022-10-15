// !Selectors

const qizil = document.querySelector("#red");
const sariq = document.querySelector("#yellow");
const yashil = document.querySelector("#green");
const paragraph = document.querySelector(".text");

let son = 0;

setInterval(() => {
    son++;
    if (son % 3 == 1) {
        qizil.style.backgroundColor = "red";
        sariq.style.backgroundColor = "yellow";
        yashil.style.backgroundColor = "green";
        qizil.style.boxShadow = "1px 1px 3px 2px rgb(179, 11, 11)";
        yashil.style.boxShadow = "none";
        paragraph.textContent = "Stop!";
        paragraph.style.color = 'red';
    }
    else if (son % 3 == 2) {
         qizil.style.backgroundColor = "red";
         sariq.style.backgroundColor = "yellow";
         yashil.style.backgroundColor = "green";
         qizil.style.boxShadow = "none";
         sariq.style.boxShadow = "1px 1px 3px 2px rgb(206, 202, 2)";
         yashil.style.boxShadow = "none";
         paragraph.textContent = "Get Ready!";
         paragraph.style.color = 'yellow';
    }
    else if (son % 3 == 0) {
         qizil.style.backgroundColor = "red";
         sariq.style.backgroundColor = "yellow";
         yashil.style.backgroundColor = "green";
         qizil.style.boxShadow = "none";
         sariq.style.boxShadow = "none";
         yashil.style.boxShadow = "1px 1px 3px 2px rgb(1, 255, 1)";
         paragraph.textContent = "Go!";
         paragraph.style.color = "rgb(102, 255, 0)";
    }
}, 2000);