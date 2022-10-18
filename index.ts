var strr = " ";
var elements = document.querySelectorAll("button") || [];
elements.forEach(function (button) {
    button.addEventListener('click', (e: Event) => {
        const el = e.target as HTMLInputElement
        const inputEl = document.getElementById("inp") as HTMLInputElement
        if (e.target === null) return; else {
            if (el.innerHTML === "=") { strr = eval(strr); inputEl.value = strr; } else if (el.innerHTML === "AC") { strr = ""; inputEl.value = strr; } else if (el.innerHTML === "xⁿ") { strr = strr + "**"; inputEl.value = strr; } else {
                console.log(el)
                strr = strr + el.innerHTML; console.log(strr); inputEl.value = strr;
            }
        }
    });
});