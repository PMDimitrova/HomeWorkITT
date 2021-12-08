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
    document.getElementsByClassName('input-container')[0].appendChild(inputBox);
}
function displaySubmitButton(){
    let submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.id = 'submitBtn';
    submitBtn.style = `
        display:inline-block;
        padding:0.35em 1.2em;
        border:1px solid #4D416E;
        margin:0 0.3em 0.3em 0;
        border-radius:0.2em;
        box-sizing: border-box;
        text-decoration:none;
        color:#4D416E;
        text-align:center;`;

    document.getElementsByClassName('input-container')[0].appendChild(submitBtn);

    document.getElementById('submitBtn').addEventListener('click', createNewBuyItem);
}


function createNewBuyItem(event) {
    let userInput = event.target.parentElement.firstChild.value;
    if(userInput !== ''){
        let newLine = document.createElement('div');
        newLine.className = 'grocery-item-line';
        newLine.style = `
            display:flex;
            flex-direction: row;`;

        let checkBox = document.createElement('div');
        checkBox.className = 'unchecked-box';
        checkBox.style = `
            width: 20px;
            height: 20px;
            padding-right: 5px;
            background-image: url("./pictures/unchecked.png");
            background-repeat: no-repeat;
            color: #B8312C;
            `;

        newLine.appendChild(checkBox);

        let newItem = document.createElement('div');
        newItem.innerText = userInput;

        newLine.appendChild(newItem);

        document.getElementsByClassName('list-container')[0].appendChild(newLine);
        console.log(newItem);

    }
}

//todo: 1. change the color and appropriate png for the new items added to the list;
// 2. find a way to add the items to an array to save it and prevent it from erasing when the page's refreshed
// 3. make a function to check/uncheck groceries
// 4. make a button to delete item