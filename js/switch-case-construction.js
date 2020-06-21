/*
 1. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

2. Задачи:

 3. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

 4. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

 5. Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

 6. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

 7. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

 8. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

 */

//Task 1
/**
 * Variable 'result' is used to store the string with the name of the season in Russian. Variable 'num' is used to store the number of a season in a year.
 */
let result;
const num = '2';
/**
 * Assigns the value to result variable (the name of the season of the year in Russian) based on the value of num variable (number of a season in a year).
 */
switch (num) {
    case '1':
        result = 'зима';
        break;
    case '2':
        result = 'весна';
        break;
    case '3':
        result = 'лето';
        break;
    case '4':
        result = 'осень';
        break;
    default:
        console.log("invalid number");
}

console.log(result);

//Task 3


/**
 * @type {number} Ordinal number of day in a month
 */
const day = 25;
/**
 * Logs into console the message about the ordinal number of a decade based on the number of day in a month
 */
if (day > 0 && day < 11) {
    console.log('Первая декада');
} else if (day > 10 && day < 21) {
    console.log('Вторая декада');
} else if (day > 20 && day < 32) {
    console.log('Третья декада');
} else {
    console.log('Invalid day number');
}

//Task 4

/**
 * @type {number} Ordinal number of month in a year
 */
const month = 12;
/**
 * The following expression logs into console the season of the year in Russian based on the given ordinal number of a month.
 */
if (month === 12 || (month > 0 && month <= 2)) {
    console.log('зима');
} else if (month > 2 && month <= 5) {
    console.log('весна');
} else if (month > 5 && month <= 8) {
    console.log('лето');
} else if (month > 8 && month <= 11) {
    console.log('осень');
}

//Task 5

const str1 = 'abcde';

/**
 * The following expression checks whether the first character of the string is 'a'. Logs into console 'Да' if true, and 'Нет' if false.
 */
if (str1[0] === 'a') {
    console.log('Да');
} else {
    console.log('Нет');
}

//Task 6

const str2 = '123456';

/**
 * The followong expression checks whether the first character of a string is either '1', or '2', or '3'. Logs into console 'Да' if true, and 'Нет' if false.
 */
if (str2[0] === '1' || str2[0] === '2' || str2[0] === '3') {
    console.log('Да');
} else {
    console.log('Нет');
}

//Task 7

/**
 * Sums first three digits in a string
 * @param string
 * @returns {number} Arithmetic sum of first three characters of a given string.
 */
function stringToNumberSum(string) {
    return Number(string[0]) + Number(string[1]) + Number(string[2]);
}

console.log('stringToNumberSum(\'587\') = ' + stringToNumberSum('587'));
console.log('stringToNumberSum(\'995\') = ' + stringToNumberSum('995'));

//Task 8

str3 = '286943';

/**
 * The following expression checks whether the sum of the first three digits in a string is equal to the sum of the second three digits in a string. Logs into console 'да' if true, and 'нет' if false.
 */
if ((Number(str3[0]) + Number(str3[1]) + Number(str3[2])) === (Number(str3[3]) + Number(str3[4]) + Number(str3[5]))) {
    console.log('да');
} else {
    console.log('нет');
}



