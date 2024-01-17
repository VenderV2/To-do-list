function pageLoad() {}

class toDoObject {
  constructor(title, details, checked, projectType, dueDate) {
    this.title = title;
    this.details = details;
    this.projectType = projectType;
    this.dueDate = dueDate;
    createToDoElement();
  }
  edit() {}

  delete() {}
}

function createToDoElement() {
  const newToDo = document.createElement("div");
  newToDo.classList.add("to-do-element");
}

export { createToDoElement, toDoObject };
