
const inputtext = document.querySelector(".text")
const submit = document.querySelector(".submit")
const ul = document.querySelector(".tasks")
const del = document.querySelector(".del")

submit.addEventListener("click", function(ev) {
    console.log(del)
    ev.preventDefault()
    if (inputtext.value == "") {
        alert("Write some task, please");
    } else {
        const newEl = document.createElement('li');
        newEl.innerHTML = `
        <input type="checkbox">${inputtext.value}<button class="del">X</button></li>`;
        ul.append(newEl);
       inputtext.value = "";
        del.addEventListener("click", function(el){
        el.preventDefault();
        el.parentElement.firstChild.target.remove()
        console.log(el.parentElement.firstChild)
        });
    }
    
})

