// import * as toDo from "to-do-functions.js"

function pageLoad() {

}

class toDoObject {
    constructor(title, details, checked, projectType, dueDate) {
        this.title = title;
        this.details = details;
        this.projectType = projectType;
        this.dueDate = dueDate;
        createToDoElement()
    }
    edit() {

    }

    delete() {

    }

}

function createToDoElement() {
    const newToDo = document.createElement('div');
    newToDo.classList.add('to-do-element');

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkbox')
    newToDo.appendChild(checkbox)

    const title = document.createElement('div')
    title.classList.add('to-do-title')
    newToDo.appendChild(title)

    const detailsBtn = document.createElement('div')
    detailsBtn.classList.add('detailsBtn')
    newToDo.appendChild(detailsBtn)

    const date = document.createElement('button')
    date.classList.add('date')
    newToDo.appendChild(date)



    const contentArea = document.querySelector('.main-area');
    contentArea.appendChild(newToDo)

}

const todo = new toDoObject