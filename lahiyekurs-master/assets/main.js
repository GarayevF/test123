const addSign = document.querySelector(".add-sign");
addSign.addEventListener("click", () => {
    input.style.display = "block";
});
const text = document.querySelector(".text");
const input = document.querySelector(".input");
const span = document.querySelectorAll("span");
const ul = document.querySelector("ul");
text.addEventListener("click", () => {
    if (input.value == "" || input.value == " ") {
        alert("Please add something!!!");
        input.style.display = "none";
    } else {
        input.style.display = "none";
        const li = document.createElement("li");
        li.innerText = input.value;
        let span = document.createElement("span");
        let img = document.createElement("img");
        img.setAttribute("src", "./assets/img/delete.png");
        img.setAttribute("class", "remove");
        li.style.listStyleType = "none";
        span.append(img);
        li.append(span);
        ul.append(li);
        input.value = "";
    }
});