//timers for appearing
// of the hading and
// than the input box and
// finally all of the items one by one


setTimeout(displayHeading, 500);
setTimeout(displayInputBox, 750);
setTimeout(displaySubmitButton, 1000);

function displayHeading() {
    let headingEl = document.createElement('h2');
    headingEl.innerText = 'Shopping list:';
    document.getElementsByClassName('heading-container')[0].appendChild(headingEl);
    headingEl.style.color = '#4D416E';
    headingEl.style.textDecoration = 'underline';
}

function displayInputBox() {
    let inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.id = 'inputField';
    inputBox.style.color = '#B8312C';
    inputBox.style.height = '20px';
    inputBox.style.width = '150px';
    inputBox.style.onfo
    document.getElementsByClassName('input-container')[0].appendChild(inputBox);
}

function displaySubmitButton(){
    let submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.id = 'submitBtn';

    document.getElementsByClassName('input-container')[0].appendChild(submitBtn);

    document.getElementById('submitBtn').addEventListener('click', createNewBuyItem);
}

function createNewBuyItem(event) {
    let userInput = event.target.parentElement.firstChild.value;
    if(userInput !== ''){
        let newLine = document.createElement('div');
        newLine.classList.add('grocery-item-line', 'unchecked-item');

        let checkBox = document.createElement('div');
        checkBox.className = 'unchecked-box';

        newLine.appendChild(checkBox);

        let newItem = document.createElement('div');
        newItem.innerText = userInput;

        newLine.appendChild(newItem);

        newLine.addEventListener('click', () => {
            if(newLine.classList.contains('checked-item')){
                checkBox.classList.remove('checked-box');
                checkBox.classList.add('unchecked-box');
            }else if(newLine.classList.contains('unchecked-item')){
                checkBox.classList.add('checked-box');
                checkBox.classList.remove('unchecked-box');
            }
            newLine.classList.toggle('checked-item');
            newLine.classList.toggle('unchecked-item');

        });

        let delBtn = document.createElement('div');
        delBtn.classList.add('delBtn');
        delBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            event.target.parentNode.remove();
        });

        newLine.appendChild(delBtn);

        document.getElementsByClassName('list-container')[0].appendChild(newLine);

        document.getElementById('inputField').value = '';
    }
}