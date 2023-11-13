'use strict'
const inputBox = document.getElementById("inp");
const todolist = document.querySelector(".todolist");
const clearall = document.getElementById("clear");
const tasksNum = document.querySelector(".tasksNum");
const todo = document.querySelector("todolist");
const addBtn = document.querySelector('.addBtn');

const createTime = getCurrentTime()

let array = []

loadDate()
render();

function render(currentTodos = array) {
    todolist.innerHTML = "";
    currentTodos.forEach(todo => {
        todolist.insertAdjacentHTML("beforeend", `<li>${todo.task} ${getCurrentTime()}
            <span><i class="fa-regular fa-circle-xmark"></i></span></li>`);
    });
}


addBtn.addEventListener('click', function() {
    if (inputBox.value === '') {
        alert('Веедите название тудушки')
    } else {
        const newTodo = {
            id: Date.now(),
            task: inputBox.value,
            completed: false
        }
        addTodo(newTodo);
        render();
        inputBox.value = '';
    }
})

function addTodo(todo) {
    array.push(todo);
    saveDate()
}

// function Add() {
//     // inputBox.value = localStorage.getItem('text');
//     // inputBox.oninput = () => {
//     //   localStorage.setItem('text', inputBox.value)
//     // };
//     // if (inputBox.value.trim().length <= 0) {
//     //     alert("Please Enter Your Task")
//     // } else {

//         // const newTask = document.createElement("li");
//         // newTask.classList.toggle('li')
//         // // console.log(newTask)
//         // newTask.innerHTML = `${inputBox.value} ${getCurrentTime()}
//         // <span><i class="fa-regular fa-circle-xmark"></i></span>`;
//         const todoObj = {
//             id: Date.now(),
//             task: inputBox.value,
//             completed: false
//         }
//         array.push(todoObj);
//         // todolist.append(newTask);
//         tasksNum.textContent = `${array.length}`;
//         saveDate();
//         inputBox.value = "";
//         newTask.querySelector("i").addEventListener("click", remove);
//         function remove() {
//             newTask.remove()
            
//         }
//         // const mmm = newTask
//         newTask.addEventListener("click", function (event) {
//             // console.log(event)
//             if (event.target.className === "li") {
//                 // console.log(event.target);
//                 event.target.classList.toggle('checked')
//             }
//             // else if(event.target.classList ==='checked'){
//             //     event.target.classList.toggle(' ');
//             // }
                
//         })
//     }
//     saveDate();
//     render();
// // }

function Delete() {
    const allLi = Array.from(document.querySelectorAll('li'))
    clearall.addEventListener('click', () => {
        allLi.forEach(item => {
            delete todolist.innerHTML
        })
    })
    saveDate()
    loadDate();
    render()
}

function clear(){
const array = array.filter((el) => {

})


}
function getCurrentTime() {
    const currentDate = new Date();
    return currentDate.toLocaleTimeString();
}

function saveDate(){
    localStorage.setItem("todos", JSON.stringify(array));
}

function loadDate() {
    if (localStorage.getItem("todos")) {
        array = JSON.parse(localStorage.getItem("todos"));
        tasksNum.textContent = `${array.length}`;
    }
}


