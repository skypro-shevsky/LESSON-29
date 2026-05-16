import { createBoard } from './scripts/createBoard.js';

const startButton = document.querySelector('.board__button');

startButton.addEventListener("click", (event) => {
    event.preventDefault()
    const input = document.querySelector('.board__input');

    let columns = input.value;
    let count;

    if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
        count = columns * columns;
    } else {
        alert("Нужно написать четное число в указанном диапазоне.");
        return;
    }

    createBoard(count, columns);
});





function createIconsArray(initialCount) {
    // Массив названий иконок
    const cardsIcons = [
        "compass",
        "cloud",
        "play",
        "bolt",
        "stop",
        "cogs",
        "atom",
        "basketball-ball",
        "arrows",
        "angle-left",
        "bars",
        "file",
        "filter",
        "gear",
        "folder",
        "folder-open",
        "shield",
        "scissors",
        "pen-clip",
    ];

    // Выбор нужного количества иконок с помощью среза
    let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
    // Создание пар элементов
    const duobleCards = dublicateElements(cards);
};

// Дублирование всех элементов входящего массива
function dublicateElements(array) {
    const newArr = [];

    array.forEach((item) => {
        newArr.push(item, item);
    });

    return newArr;
}
Перемешивание массива

function createIconsArray(initialCount) {
    // Массив названий иконок
    const cardsIcons = [
        "compass",
        "cloud",
        "play",
        "bolt",
        "stop",
        "cogs",
        "atom",
        "basketball-ball",
        "arrows",
        "angle-left",
        "bars",
        "file",
        "filter",
        "gear",
        "folder",
        "folder-open",
        "shield",
        "scissors",
        "pen-clip",
    ];

    // Выбор нужного количества иконок с помощью среза
    let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
    // Создание пар элементов
    const duobleCards = dublicateElements(cards);
    // Случайное перемешивание элементов и возврат итогового массива
    return shuffleArray(duobleCards);
};

// Перемешивание элементов массива
function shuffleArray(array) {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        const temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    };