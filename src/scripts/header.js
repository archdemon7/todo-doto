class Header {
    constructor(container) {
        this.container = container;
        this.create();
        this.updateDate();
    }
    create() {
        const header = document.createElement('header');
        header.classList.add('header');
        this.container.append(header);

        const container = document.createElement('div')
        container.classList.add('container', 'header-container');
        header.append(container);

        const logo = document.createElement('div');
        logo.classList.add('logo');
        container.append(logo);
        const image = document.createElement('img');
        image.setAttribute('src', './assets/img/logo.png');
        image.setAttribute('alt', 'logo');
        image.setAttribute('class', 'logo-image');
        logo.append(image);

        const title = document.createElement('div');
        title.classList.add('title');
        container.append(title);
        const titleText = document.createElement('div');
        titleText.classList.add('title-text');
        title.append(titleText);
        const titleApp = 'YOUR TODO LIST'.split('');
        titleApp.forEach(e => {
            if (e == ' ') {
                const letter = document.createElement('pre');
                letter.textContent = ' ';
                titleText.append(letter);
            } else {
                const letter = document.createElement('p');
                letter.classList.add('title-letter');
                letter.textContent = e;
                titleText.append(letter);
            }
        })
        const date = document.createElement('div');
        date.classList.add('date');
        container.append(date);
        const dateDate = document.createElement('p');
        dateDate.classList.add('date-date');
        date.append(dateDate);
        const dateTime = document.createElement('p');
        dateTime.classList.add('date-time');
        date.append(dateTime);
    }
    updateDate() {
        const dateDate = document.querySelector('.date-date');
        const dateTime = document.querySelector('.date-time');
        let currentDate = new Date();
        let date = currentDate.toLocaleDateString('ru-Ru');
        let time = currentDate.toLocaleTimeString('ru-RU');
        dateDate.textContent = date;
        dateTime.textContent = time;
        setInterval(this.updateDate, 1000)
    }
}
const container = document.querySelector('.app-container');
const header = new Header(container);
export { header };