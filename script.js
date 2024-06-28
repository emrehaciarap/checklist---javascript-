
const container = document.getElementById("container");
const inputText = document.getElementById("input-text");
const submitText = document.getElementById("submit-text");
const taskField = document.createElement("div");
container.appendChild(taskField); 


// enter fonksiyonu 
inputText.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        submitText.click();
    }
});

let counter = 1;
submitText.addEventListener('click', () => {

    const text = inputText.value.trim();
    if (text !== "") { // Boş değeri kontrol et
        const newDiv = document.createElement('div');
        newDiv.id="newdiv";


        //checkbox 
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id = `checkbox-${counter}`;

        checkbox.addEventListener('click', () => {
            if (checkbox.checked) {
                newDiv.classList.add('subdued');
            } else {
                newDiv.classList.remove('subdued');
            }
        });

        //delete 
        const deleteButton = document.createElement('button');
        deleteButton.id="btn";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', () => {
            taskField.removeChild(newDiv);
            updateTaskNumbers();
        });
        
        newDiv.textContent = `${counter}. ${text}`;
        newDiv.appendChild(checkbox);
        taskField.appendChild(newDiv);
        newDiv.appendChild(deleteButton);
        counter++;  
        inputText.value = ''; // Clear input
        

    } else {
        alert("Lütfen bir metin girin.");
    }
});

function updateTaskNumbers() {
    const tasks = taskField.getElementsByTagName('div');
    counter = 1;
    for (let task of tasks) {
        task.firstChild.textContent = `${counter}. ${task.firstChild.textContent.split('. ')[1]}`;
        counter++;
    }
}





