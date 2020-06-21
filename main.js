// Создаем массив со словами
var guess;
var words = [
    "велосипед",    
    "программа",
     "обезьяна",
     "заяц",
    // "оладушек"
    ];
    // Выбираем случайное слово
    var word = words[Math.floor(Math.random() * words.length)];

    var question = [
        "В две руки беру, между ног сую, пять минут потею, а потом балдею!", 
        "Синонимы к слову проект, план",
        "От банана до банана, Ловко скачет... ",
        "Летом серый, а зимой белый.",
        "Он круглый и румяный,\n Его любят со сметаной,\n И с вареньем и с медком,\n Вкус его нам всем знаком."
    ];
    
    for (let i = 0; i < words.length; i++) {
        //const element = array[i];
        if (word === words[i]) {

            alert(question[i] + "\n Что это?")
                        
        } 
    }

    // Создаем итоговый массив
    var answerArray = [];
    
    for (var i = 0; i < word.length; i++) {    
    answerArray[i] = "_";
    }
    var remainingLetters = word.length;
    // Игровой цикл
    while (remainingLetters > 0) {
    // Показываем состояние игры
    alert("Количество букв \n" + answerArray.join(" "));
    
    // Запрашиваем вариант ответа
     guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
    if (guess === null) {
    // Выходим из игрового цикла
    break;
    } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
    } else {
    // Обновляем состояние игры
    for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    answerArray[j] = guess;
    remainingLetters--;
    }
    }
    }
    // Конец игрового цикла
    }


    // Отображаем ответ и поздравляем игрока
    if (guess === null) {
        alert("Вы не угадали \n Было загадано слово " + word);
    }else   
    alert("Отлично! Было загадано слово " + word);
