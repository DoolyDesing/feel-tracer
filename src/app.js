let moodBtns = document.getElementsByClassName('moodBtn');
let addBtn = document.getElementById('addBtn')

addBtn.onclick = function() {
    
}

// Находим элементы container и addBtn
const container = document.querySelector('.container');
addBtn = document.querySelector('#addBtn');

// Добавляем новый элемент в container при нажатии на кнопку addBtn
addBtn.onclick = function() {
    // Создаем новый элемент div
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<div class="day">
    <button class="moodBtn"></button>
    <button class="moodBtn"></button>
    <button class="moodBtn"></button>
    <button class="moodBtn"></button>
    <button class="moodBtn"></button>
    <button class="moodBtn"></button>
    <button class="moodBtn"></button>
    </div>`;
    
    // Добавляем новый элемент в container
    container.appendChild(newDiv);
    
    // Находим новые кнопки и добавляем им обработчики событий
    let newMoodBtns = newDiv.querySelectorAll('.moodBtn');
    for (let i = 0; i < newMoodBtns.length; i++) {
        newMoodBtns[i].onclick = function() {
            this.style = `
            border-radius: 8px;
            border: 2px solid var(--tailwind-violet-400, #A78BFA);
            background: var(--tailwind-violet-500, #8B5CF6);`;            
        }
    }
}




for (let i = 0; i < moodBtns.length; i++) {
    moodBtns[i].onclick = function() {
            this.style = `
            border-radius: 8px;
            border: 2px solid var(--tailwind-violet-400, #A78BFA);
            background: var(--tailwind-violet-500, #8B5CF6);`;            
        }
    }








