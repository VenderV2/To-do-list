// import * as toDo from "to-do-functions.js"

function pageLoad() {

}

class Form {
    constructor() {
        CreateFormElement()
        
    }
}

class ToDoObject {
    constructor(formTitle, formDetails, formDueDate, formChecked, formProjectType) {
        this.title = formTitle;
        this.details = formDetails;
        this.checked = formChecked;
        this.projectType = formProjectType;
        this.dueDate = formDueDate;
        CreateToDoElement(this.title, this.details, this.date, this.checked, this.projectType, this.dueDate)



    }
    edit() {

    }

    delete() {

    }

}

function CreateToDoElement(formTitle) {
    const newToDo = document.createElement('div');
    newToDo.classList.add('to-do-element');

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkbox')
    newToDo.appendChild(checkbox)

    const title = document.createElement('div')
    title.classList.add('to-do-title')
    title.textContent = formTitle
    newToDo.appendChild(title)

    const detailsBtn = document.createElement('button')
    detailsBtn.classList.add('detailsBtn')
    newToDo.appendChild(detailsBtn)

    const date = document.createElement('div')
    date.classList.add('date')
    newToDo.appendChild(date)

    const editBtn = document.createElement('button')
    editBtn.classList.add('editBtn')
    newToDo.appendChild(editBtn)

    const delBtn = document.createElement('button')
    delBtn.classList.add('delBtn')
    newToDo.appendChild(delBtn)

    const contentArea = document.querySelector('.main-area');
    contentArea.appendChild(newToDo)

}

function CreateFormElement() {
    const newForm = document.createElement('div')
    newForm.classList.add('form-element')

    const title = document.createElement('input')
    title.classList.add('form-title')
    newForm.appendChild(title)

    const details = document.createElement('input')
    details.classList.add('form-details')
    newForm.appendChild(details)

    const date = document.createElement('input')
    date.classList.add('form-date')   
    date.type = 'date'
    newForm.appendChild(date)

    const submit = document.createElement('button')
    submit.classList.add('form-submit')
    newForm.appendChild(submit)
    submit.addEventListener('click', Submit)



    const newFormBackground = document.createElement('div')
    newFormBackground.classList.add('form-background-overlay')
    newFormBackground.appendChild(newForm)

    const page = document.querySelector('html')
    page.appendChild(newForm)
    page.appendChild(newFormBackground)
}

function Submit() {
    const formTitle = document.querySelector('.form-title')
    const formDetails = document.querySelector('.form-details')
    const formDate = document.querySelector('.form-date')

    const newToDoObj = new ToDoObject(formTitle.value, formDetails.value, formDate.value)
}





// const todo = new ToDoObject

const newform = new Form