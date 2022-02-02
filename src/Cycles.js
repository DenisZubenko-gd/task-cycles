/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let result = 0,
        i = start;
    for (start; i <= end; i++) {
        if (i % 2 == 0) {
            result = result + i;
        }
    }
    return result;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let result = 0,
        i = a;
    while (i > 0.1) {
        i = i / 2;
        ++result;
    }
    return result;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let i = 3,
        len_msg = message.length,
        result_msg = message.slice(0, 2);
    do {
        if (i % 3 === 0) {
            result_msg = result_msg + '_';
        } else {
            result_msg = result_msg + message[i - 1];
        }
        i++;
    } while (i <= len_msg);
    return result_msg;
}
