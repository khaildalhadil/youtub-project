const saveBtn = document.querySelector('.btn');
const inputValue = document.querySelector('.input');
const listContainer = document.querySelector('.list-container');

const addToDo = ()=> {
    if (inputValue.value === '') {
        return;
    }
    // create list
    const li = document.createElement('li')
    li.innerHTML = inputValue.value;

    // create span 
    const span = document.createElement('span');
    span.innerHTML = '\u00d7';

    li.appendChild(span);
    
    listContainer.append(li)
    saveData()
    
    li.addEventListener('click', (e)=> {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('done')
            saveData()
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
            saveData()
        }
    })
    inputValue.value = ''
}

saveBtn.addEventListener('click' , addToDo)

addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        addToDo()
    }
});

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
    console.log(listContainer.innerHTML)
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showData();