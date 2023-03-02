class Header {
    constructor(container) {
        this.container = container;
        this.create();
    }
    create() {
        const header = document.createElement('header');
        header.classList.add('header');
        this.container.append(header);

        const logo = document.createElement('div');
        logo.classList.add('logo');
        header.append(logo);
        const image = document.createElement('img');
        image.src = './assets/img/logo.png';
        image.setAttribute('alt', 'logo');
        logo.append(image);

        const title = document.createElement('div');
        title.classList.add('title');
        header.append(title);

        const date = document.createElement('div');
        date.classList.add('date');
        header.append(date);
    }
}
const container = document.querySelector('.app-container');
const header = new Header(container);
export { header };