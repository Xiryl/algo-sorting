/* eslint-disable prefer-promise-reject-errors */
const bubbleSort = (generatedNumbers) =>
    new Promise((resolve, reject) => {
        const animations = [];
        const numbers = [...generatedNumbers];

        const len = numbers.length;

        for (let i = 0; i < len - 1; i += 1) {
            for (let j = 0; j < len - 1 - i; j += 1) {
                if (numbers[j] > numbers[j + 1]) {
                    const tmp = numbers[j + 1];
                    const swap = {
                        idxSorted: len - 1 - i,
                        key: tmp,
                        a: j + 1,
                        b: j,
                    };
                    animations.push(swap);
                    numbers[j + 1] = numbers[j];
                    numbers[j] = tmp;
                }
            }
        }

        const swap = {
            idxSorted: 0,
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

export default bubbleSort;
