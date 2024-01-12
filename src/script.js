// import * as toDo from "to-do-functions.js"

function pageLoad() {

}



class ToDoObject {
    constructor(formTitle, formDetails, formDueDate, formChecked, formProjectType) {
        this.title = formTitle;
        this.details = formDetails;
        this.checked = formChecked;
        this.projectType = formProjectType;
        this.dueDate = formDueDate;
        CreateToDoElement(this.title, this.details, this.dueDate, this.checked, this.projectType)



    }
    edit() {

    }

    delete() {

    }

}

class Form {
    constructor() {
        CreateFormElement()
    }
    delete() {
        deleteFormObj()
    }
}


//creates new entry and appends it to the list area
//input values are passed from form input values
function CreateToDoElement(objTitle, objDetails, objDueDate, objChecked, objProjectType) {
    const newToDo = document.createElement('div');
    newToDo.classList.add('to-do-element');

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.value = objChecked
    checkbox.classList.add('checkbox')
    newToDo.appendChild(checkbox)

    const title = document.createElement('div')
    title.classList.add('to-do-title')
    title.textContent = objTitle
    newToDo.appendChild(title)

    const detailsBtn = document.createElement('button')
    detailsBtn.classList.add('detailsBtn')
    newToDo.appendChild(detailsBtn)

    const date = document.createElement('input')
    date.type = 'date'
    date.classList.add('date')
    date.value = objDueDate
    newToDo.appendChild(date)

    const editBtn = document.createElement('button')
    editBtn.classList.add('editBtn')
    editBtn.textContent = 'Edit'
    newToDo.appendChild(editBtn)

    const delBtn = document.createElement('button')
    delBtn.classList.add('delBtn')
    delBtn.textContent = 'Delete'
    newToDo.appendChild(delBtn)

    const contentArea = document.querySelector('.main-area');
    contentArea.appendChild(newToDo)

}

//creates entry input window and blurs background
//input values are passed to a new to-do object when submit is clicked
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
    submit.textContent = 'Submit'
    newForm.appendChild(submit)
    submit.addEventListener('click', Submit)

    const delBtn = document.createElement('button')
    delBtn.classList.add('delBtn')
    delBtn.textContent = 'Delete'
    delBtn.addEventListener('click', deleteFormObj)
    newForm.appendChild(delBtn)


    const newFormBackground = document.createElement('div')
    newFormBackground.classList.add('form-background-overlay')
    newFormBackground.appendChild(newForm)

    const page = document.querySelector('html')
    page.appendChild(newForm)
    page.appendChild(newFormBackground)
}

//submit button on new entry form object
function Submit() {
    const formTitle = document.querySelector('.form-title')
    const formDetails = document.querySelector('.form-details')
    const formDate = document.querySelector('.form-date')

    const newToDoObj = new ToDoObject(formTitle.value, formDetails.value, formDate.value)
}

function deleteFormObj() {
    const form = document.querySelector('.form-element')
    const formBackground = document.querySelector('.form-background-overlay')
    form.remove()
    formBackground.remove()
}



// const todo = new ToDoObject

const newform = new Form