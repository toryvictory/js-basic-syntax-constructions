/*
 1. Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

 2. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

 3. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
 4. Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

 5. Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

 6. Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

 7. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

 8. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.
 */

/**
 * Checks whether the argument is strictly equal to 0.
 * @param a
 * @returns {string} Returns 'Верно' if the condition is true, and 'Неверно' if the condition is false.
 */
function equalToZero(a) {
    if (a === 0) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}

console.log('equalToZero(1) = ' + equalToZero(1));
console.log('equalToZero(0) = ' + equalToZero(0));
console.log('equalToZero(-3) = ' + equalToZero(-3));

/**
 * Checks whether the argument is bigger than 0.
 * @param a
 * @returns {string} Returns 'Верно' if the condition is true, and 'Неверно' if the condition is false.
 */
function biggerThanZero(a) {
    if (a > 0) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}

console.log('biggerThanZero(1) = ' + biggerThanZero(1));
console.log('biggerThanZero(0) = ' + biggerThanZero(0));
console.log('biggerThanZero(-3) = ' + biggerThanZero(-3));

/**
 * Checks whether the argument is less than 0.
 * @param a
 * @returns {string} Returns 'Верно' if the condition is true, and 'Неверно' if the condition is false.
 */
function lessThanZero(a) {
    if (a < 0) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}

console.log('lessThanZero(1) = ' + lessThanZero(1));
console.log('lessThanZero(0) = ' + lessThanZero(0));
console.log('lessThanZero(-3) = ' + lessThanZero(-3));

/**
 * Checks whether the argument is equal to or bigger than 0.
 * @param a
 * @returns {string} Returns 'Верно' if the condition is true, and 'Неверно' if the condition is false.
 */
function biggerOrEqualToZero(a) {
    if (a >= 0) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}

console.log('biggerOrEqualToZero(1) = ' + biggerOrEqualToZero(1));
console.log('biggerOrEqualToZero(0) = ' + biggerOrEqualToZero(0));
console.log('biggerOrEqualToZero(-3) = ' + biggerOrEqualToZero(-3));

/**
 * Checks whether the argument is equal to or less than 0.
 * @param a
 * @returns {string} Returns 'Верно' if the condition is true, and 'Неверно' if the condition is false.
 */
function lessOrEqualToZero(a) {
    if (a <= 0) {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}

console.log('lessOrEqualToZero(1) = ' + lessOrEqualToZero(1));
console.log('lessOrEqualToZero(0) = ' + lessOrEqualToZero(0));
console.log('lessOrEqualToZero(-3) = ' + lessOrEqualToZero(-3));

/**
 * Checks whether the argument is stricktly not equal to 0.
 * @param a
 * @returns {boolean} Returns 'Верно' if the argument is not equal to zero, and 'Неверно' if a is equal to 0.
 */
function notEqualToZero(a) {
    if (a === 0) {
        return 'Неверно';
    } else {
        return 'Верно';
    }
}

console.log('notEqualToZero(1) = ' + notEqualToZero(1));
console.log('notEqualToZero(0) = ' + notEqualToZero(0));
console.log('notEqualToZero(-3) = ' + notEqualToZero(-3));

/**
 * Checks whether the argument is equal to 'test' (type String).
 * @param a
 * @returns {string} Returns 'Верно' if the condition is true, and 'Неверно' if the condition is false.
 */
function equalToTest(a) {
    if (a === 'test') {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}

console.log('equalToTest(\'test\') = ' + equalToTest('test'));
console.log('equalToTest(\'тест\') = ' + equalToTest('тест'));
console.log('equalToTest(3) = ' + equalToTest(3));

/**
 * Checks whether the argument is equal to '1' with type String.
 * @param a
 * @returns {string} Returns 'Верно' if the condition is true, and 'Неверно' if the condition is false.
 */
function equalToOne(a) {
    if (a === '1') {
        return 'Верно';
    } else {
        return 'Неверно';
    }
}

console.log('equalToOne(\'1\') = ' + equalToOne('1'));
console.log('equalToOne(1) = ' + equalToOne(1));
console.log('equalToOne(3) = ' + equalToOne(3));