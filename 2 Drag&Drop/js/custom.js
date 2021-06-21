const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
const colHeader = document.querySelectorAll('.col-header');
const block1 = document.querySelector('.block1');
const progress = document.querySelector('.progress');
const block3 = document.querySelector('.block3');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event) {
    event.target.classList.add('active');

    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    event.target.classList.remove('hide');
    event.target.classList.remove('active');
}

for(let placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered');
}

function dragleave() {
    placeholders.forEach((placeholder) => {
        placeholder.classList.remove('hovered');
    })
}

function dragdrop(event) {
    event.target.classList.remove('hovered');

    event.target.appendChild(item);
}