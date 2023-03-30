function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

   1 let message;

   2 message = productName;

   3 message = message + " ";

   4 message = message + "за";

   5 message = message + " ";

   6 message = message + "productPrice";

   7 message = message " ";

   8 message = message "теперь в корзине!";

   9 console.log(message);
    
    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине

   1 let oldValue = value;

   2 let newValue;

   3 newValue = oldValue;

   4 newValue = newValue + 1;
    
    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

   1 let newSum = oldSum + difference

   2 let newSumText = newSum + ₽

   3 newSumText = ${newSum} ₽


    
    // Конец решения задания №1.3.

    return newSumText;
}

