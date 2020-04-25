/* eslint-disable prefer-promise-reject-errors */
const insertionSort = (generatedNumbers) =>
    new Promise((resolve, reject) => {
        const animations = [];
        const numbers = [...generatedNumbers];

        const len = numbers.length;

        for (let i = 1; i < len; i += 1) {
            const key = numbers[i];
            let j = i - 1;

            while (j >= 0 && numbers[j] > key) {
                const swap = {
                    num: numbers[j],
                    key,
                    a: j + 1,
                    b: j,
                };
                animations.push(swap);
                numbers[j + 1] = numbers[j];
                j -= 1;
            }
            numbers[j + 1] = key;
        }

        const swap = {
            num: 0,
            key: 0,
            a: 0,
            b: 0,
        };
        animations.push(swap);

        if (animations.length >= 2) {
            resolve(animations);
        } else {
            reject(-1);
        }
    });

export default insertionSort;
