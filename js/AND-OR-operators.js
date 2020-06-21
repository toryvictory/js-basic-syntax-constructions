/*
1. Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

 2. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

 3. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

 4. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

 */

/**
 * Function checks whether argument a is between 0 and 5 (not including).
 * @param a
 * @returns {string} Returns 'Верно' if the condition is true, and 'Неверно' if the condition is false.
 */
function isFromZeroToFive(a) {
    if (a > 0 && a < 5)
        return 'Верно';
    else
        return 'Неверно';
}

console.log('isFromZeroToFive(5) = ' + isFromZeroToFive(5));
console.log('isFromZeroToFive(0) = ' + isFromZeroToFive(0));
console.log('isFromZeroToFive(-3) = ' + isFromZeroToFive(-3));
console.log('isFromZeroToFive(2) = ' + isFromZeroToFive(2));

/**
 * Function divides argument by 10 if it is not equal to either 0 or 2. If the latter is true, the function adds 7 to argument.
 * @param a
 * @returns {number}
 */
function modifyNumber(a) {
    if (a === 0 || a === 2)
        return a += 7;
    else
        return a /= 10;
}

console.log('modifyNumber(5) = ' + modifyNumber(5));
console.log('modifyNumber(0) = ' + modifyNumber(0));
console.log('modifyNumber(-3) = ' + modifyNumber(-3));
console.log('modifyNumber(2) = ' + modifyNumber(2));

/**
 * The function performs either subtraction or sum of arguments depending on whether certain math conditions are met.
 * @param num1
 * @param num2
 * @returns {number|*}
 */
function trickySum(num1, num2) {
    if (num1 <= 1 && num2 >= 3) {
        return num1 + num2;
    } else {
        return num1 - num2;
    }
}

console.log('trickySum(1, 3) = ' + trickySum(1, 3));
console.log('trickySum(0, 6) = ' + trickySum(0, 6));
console.log('trickySum(3, 5) = ' + trickySum(3, 5));

/**
 * Checks whether arguments meet certain math conditions.
 * @param a
 * @param b
 * @returns {string} Returns 'Верно' if the conditions are met, and 'Неверно' if the conditions are not satisfied.
 */
function satisfiesMathConditions(a, b) {
    if ((a > 2 && a < 11) || (b >= 6 && b < 14))
        return 'Верно';
    else
        return 'Неверно';
}