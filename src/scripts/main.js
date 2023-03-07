class Main {
    constructor(container) {
        this.container = container;
        this.create()
    }
    create() {
        const main = document.createElement('main');
        main.classList.add('main');
        this.container.append(main);

        const container = document.createElement('div');
        container.classList.add('container', 'main-container');
        main.append(container);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');
        container.append(buttonsContainer);

        const currentButton = document.createElement('button');
        currentButton.classList.add('button');
        currentButton.textContent = 'Current tasks';
        buttonsContainer.append(currentButton);

        const addButton = document.createElement('button');
        addButton.classList.add('button', 'add-button');
        buttonsContainer.append(addButton);
        addButton.addEventListener('click', this.addTask);
        const buttonImg = document.createElement('img');
        buttonImg.classList.add('button-img');
        buttonImg.setAttribute('src', './assets/img/plus.png');
        buttonImg.setAttribute('alt', 'plus');
        buttonImg.setAttribute('class', 'button-image');
        addButton.append(buttonImg);

        const completeButton = document.createElement('button'); 
        completeButton.classList.add('button');
        completeButton.textContent = 'Complete tasks';
        buttonsContainer.append(completeButton);

        const bodyTasks = document.createElement('div');
        bodyTasks.classList.add('body-tasks');
        container.append(bodyTasks);

        const newTaskContainer = document.createElement('div');
        newTaskContainer.classList.add('task-container');
        bodyTasks.append(newTaskContainer);


        const taskInput = document.createElement('input');
        taskInput.classList.add('task-input');
        newTaskContainer.append(taskInput);

        const taskButton = document.createElement('button');
        taskButton.textContent = 'Add';
        taskButton.classList.add('task-button');
        newTaskContainer.append(taskButton);
    }
    addTask() {
        document.querySelector('.task-container').classList.add('active');
    }
    saveTask() {
        
    }
}

const container = document.querySelector('.app-container');
const main = new Main(container);
export { main };