// import * as toDo from "to-do-functions.js"
const library = [];
const IDs = [];




class ToDoObject {
    constructor(formTitle, formDetails, formDueDate, formProjectType) {
        this.title = formTitle;
        this.details = formDetails;
        // this.checked = formChecked;
        this.projectType = formProjectType;
        this.dueDate = formDueDate;
        this.ID = CreateToDoElement(this.title, this.details, this.dueDate, this.projectType)
    }
    static editEntry(entryID) {
        const entryData = getIndexOfID(entryID)
        console.log(entryID)
        const newEditForm = new EditForm(entryData.title, entryData.details, entryData.dueDate, entryData.projectType, entryData.ID)
    }

    static delete(id) {
        const entryToBeDeleted = document.getElementById(id)
        entryToBeDeleted.remove()
        RemoveLibraryIDs(id)
        console.log(library)
    }
    static addNewEntry() {
        Form.create()
    }

}

class EditedToDoObject {
    constructor(id, formTitle, formDetails, formDueDate, formProjectType) {
        this.ID = id
        this.title = formTitle;
        this.details = formDetails;
        // this.checked = formChecked;
        this.projectType = formProjectType;
        this.dueDate = formDueDate;
        UpdateEntryFields(this.ID, this.title, this.dueDate, this.projectType)
    }
    // static editEntry(entryID) {
    //     const entryData = getIndexOfID(entryID)
    //     console.log(entryID)
    //     const newEditForm = new EditForm(entryData.title, entryData.details, entryData.dueDate, entryData.checked, entryData.projectType, entryData.ID)
    // }
    // static delete() {

    // }
}

class Form {
    constructor() {
        
    }
    static create() {
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
        const formProjectType = document.querySelector('.form-project-type')
    
        const newToDoObj = new ToDoObject(formTitle.value, formDetails.value, formDate.value, formProjectType.value)
        library.push(newToDoObj)
        IDs.push(newToDoObj.ID)
        Form.delete()
    }
}

class EditForm {
    constructor(title, details, dueDate, projectType, entryID) {
        this.entryID = entryID
         CreateEditForm(title, details, dueDate, projectType, entryID)
    }
    // Create() {
    //     CreateEditForm(title, details, dueDate, checked, projectType, entryID)
    // }
    ConfirmButton(id) {
        const formTitle = document.querySelector('.form-title')
        const formDetails = document.querySelector('.form-details')
        const formDate = document.querySelector('.form-date')
        const formProjectType = document.querySelector('.form-project-type')

        const editedToDo = new EditedToDoObject(id, formTitle.value, formDetails.value, formDate.value, formProjectType.value)
        RemoveLibraryIDs(id)
        library.push(editedToDo)
        IDs.push(editedToDo.ID)
        console.log(library)

        Form.delete()
        Form.delete()
    }
}

//creates new entry and appends it to the list area
//input values are passed from form input values
function CreateToDoElement(objTitle, objDetails, objDueDate, objProjectType, objChecked) {
    const newToDo = document.createElement('div');
    newToDo.classList.add('to-do-element');
    newToDo.id = Date.now()  //This line creates and sets the unique id for each entry

    const colourTag = document.createElement('div')
    colourTag.classList.add('colour-tag')
    newToDo.appendChild(colourTag)
    const colourTagType = getColour(objProjectType)
    colourTag.style.backgroundColor = colourTagType;

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

    const date = document.createElement('div')
    date.classList.add('date')
    date.textContent = objDueDate
    newToDo.appendChild(date)

    const detailsBtn = document.createElement('button')
    detailsBtn.classList.add('detailsBtn')
    detailsBtn.textContent = 'Details'
    newToDo.appendChild(detailsBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add('editBtn')                   
    editBtn.addEventListener('click', (e) => {ToDoObject.editEntry(newToDo.id)},{captured: true})
    newToDo.appendChild(editBtn)
    const editIcon = document.createElement('img')
    editIcon.src = "./icons/square-edit-outline.svg"
    editBtn.appendChild(editIcon)


    const delBtn = document.createElement('button')
    delBtn.classList.add('delBtn')
    delBtn.addEventListener('click', () => {ToDoObject.delete(newToDo.id)})
    newToDo.appendChild(delBtn)
    const deleteIcon = document.createElement('img')
    deleteIcon.src = 'icons/trash-can-outline.svg'
    delBtn.appendChild(deleteIcon)

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

    const projectType = document.createElement('input')
    projectType.classList.add('form-project-type')
    newForm.appendChild(projectType)

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


function getIndexOfID(entryID) {
    idIndex = IDs.indexOf(entryID);
    return library[idIndex];
}

function CreateEditForm(objTitle, objDetails, objDueDate, objProjectType, entryID) {
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

    const projectType = document.createElement('input')
    projectType.classList.add('form-project-type')
    newForm.appendChild(projectType)
    projectType.value = objProjectType

    const confirm = document.createElement('button')
    confirm.classList.add('form-confirm')
    confirm.textContent = 'Confirm'
    newForm.appendChild(confirm)
    confirm.addEventListener('mouseup', (e) => {
        const newEditForm = new EditForm;
        newEditForm.ConfirmButton(entryID)
        e.stopPropagation
    }, {captured: true})             

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

function UpdateEntryFields(entryID, title, dueDate, projectType) {
    console.log(entryID)
    const updateTitle = document.getElementById(entryID).getElementsByClassName('to-do-title')[0]
    updateTitle.textContent = title;

    const updateDate = document.getElementById(entryID).getElementsByClassName('date')[0]
    updateDate.textContent = dueDate;
}

function RemoveLibraryIDs(id) {
    indexInIDarray = IDs.indexOf(id)
    IDs.splice(indexInIDarray, 1)
    library.splice(indexInIDarray, 1)

}

function newEntryButton() {
    const addNewEntryButton = document.createElement('button')
    addNewEntryButton.classList.add('new-entry-button')
    // addNewEntryButton.textContent = '+'
    addNewEntryButton.addEventListener('click', ToDoObject.addNewEntry)
    const addIcon = document.createElement('img')
    addIcon.src = 'icons/plus.svg'
    addIcon.setAttribute('fill', 'currentColor')
    addIcon.classList.add('addIcon')
    addNewEntryButton.appendChild(addIcon)

    const sidebar = document.querySelector('.sidebar')
    sidebar.appendChild(addNewEntryButton)
}
newEntryButton();

function getColour(projectType) {
    const lowerCaseProjType = String(projectType);
    if (lowerCaseProjType.toLowerCase() == 'home') {
        return 'green';
    }
    else if(lowerCaseProjType.toLowerCase() == 'work') {
        return 'blue';
    }
    else if (lowerCaseProjType.toLowerCase() == 'study') {
        return 'purple';
    }
    else if (lowerCaseProjType.toLowerCase() == 'today') {
        return 'orange';
    }
}



CreateToDoElement('hello')