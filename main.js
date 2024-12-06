function changeContent() {
    document.querySelector('p').textContent = "You clicked the button!";
}

document.querySelector('button').addEventListener('click', changeContent);