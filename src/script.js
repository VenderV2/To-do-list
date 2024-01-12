// import * as toDo from "to-do-functions.js"
const library = [];
const IDs = [];

class ToDoObject {
    constructor(formTitle, formDetails, formDueDate, formChecked, formProjectType) {
        this.title = formTitle;
        this.details = formDetails;
        this.checked = formChecked;
        this.projectType = formProjectType;
        this.dueDate = formDueDate;
        this.ID = CreateToDoElement(this.title, this.details, this.dueDate, this.checked, this.projectType)


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
    static delete() {
        const form = document.querySelector('.form-element')
        const formBackground = document.querySelector('.form-background-overlay')
        form.remove()
        formBackground.remove()
    }
    static Submit() {
        const formTitle = document.querySelector('.form-title')
        const formDetails = document.querySelector('.form-details')
        const formDate = document.querySelector('.form-date')
    
        const newToDoObj = new ToDoObject(formTitle.value, formDetails.value, formDate.value)
        library.push(newToDoObj)
        IDs.push(newToDoObj.ID)
    }
}


//creates new entry and appends it to the list area
//input values are passed from form input values
function CreateToDoElement(objTitle, objDetails, objDueDate, objChecked, objProjectType) {
    const newToDo = document.createElement('div');
    newToDo.classList.add('to-do-element');
    newToDo.id = objDetails.replace(/ /g,'')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.value = objChecked
    checkbox.classList.add('checkbox')
    newToDo.appendChild(checkbox)

    const title = document.createElement('div')
    title.classList.add('to-do-title')
    //title.id = newToDo.id
    title.textContent = objTitle
    newToDo.appendChild(title)

    const details = document.createElement('div')
    details.classList.add('details')
    details.textContent = objDetails

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
    //editBtn.id = newToDo.id
    editBtn.textContent = 'Edit'                                      //unfinished
    editBtn.addEventListener('click', () => {editEntry(newToDo.id)})
    newToDo.appendChild(editBtn)

    const delBtn = document.createElement('button')
    delBtn.classList.add('delBtn')
    delBtn.textContent = 'Delete'
    newToDo.appendChild(delBtn)

    const contentArea = document.querySelector('.main-area');
    contentArea.appendChild(newToDo)

    return  newToDo.id

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
    submit.addEventListener('click', Form.Submit)

    const delBtn = document.createElement('button')
    delBtn.classList.add('delBtn')
    delBtn.textContent = 'Cancel'
    delBtn.addEventListener('click', Form.delete)
    newForm.appendChild(delBtn)


    const newFormBackground = document.createElement('div')
    newFormBackground.classList.add('form-background-overlay')
    newFormBackground.appendChild(newForm)

    const page = document.querySelector('html')
    page.appendChild(newForm)
    page.appendChild(newFormBackground)
}

function editEntry(entryID) {
    const entryTitle = document.getElementById(entryID).getElementsByClassName('to-do-title')[0]
    const entryDetails = document.getElementById(entryID).getElementsByClassName('details')[0]

    CreateEditForm(entryTitle.textContent, entryDetails.textContent)
}



function CreateEditForm(objTitle, objDetails, objDueDate, objChecked, objProjectType) {
    const newForm = document.createElement('div')
    newForm.classList.add('form-element')

    const title = document.createElement('input')
    title.classList.add('form-title')
    newForm.appendChild(title)
    title.value = objTitle
    

    const details = document.createElement('input')
    details.classList.add('form-details')
    newForm.appendChild(details)
    details.value = objDetails

    const date = document.createElement('input')
    date.classList.add('form-date')   
    date.type = 'date'
    newForm.appendChild(date)
    date.value = objDueDate

    const confirm = document.createElement('button')
    confirm.classList.add('form-confirm')
    confirm.textContent = 'Confirm'
    newForm.appendChild(confirm)
    // confirm.addEventListener('click', )                     //unfinished

    const delBtn = document.createElement('button')
    delBtn.classList.add('delBtn')
    delBtn.textContent = 'Cancel'
    delBtn.addEventListener('click', Form.delete)
    newForm.appendChild(delBtn)


    const newFormBackground = document.createElement('div')
    newFormBackground.classList.add('form-background-overlay')
    newFormBackground.appendChild(newForm)

    const page = document.querySelector('html')
    page.appendChild(newForm)
    page.appendChild(newFormBackground)
}

const newform = new Form