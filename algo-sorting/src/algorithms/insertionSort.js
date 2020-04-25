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
                // uncomment for preview the comparison
                // animations.push({
                //     type: "comparison",
                //     first: j,
                //     second: i,
                // });

                animations.push({
                    type: "swap",
                    first: j + 1,
                    second: j,
                });

                numbers[j + 1] = numbers[j];
                j -= 1;
            }
            numbers[j + 1] = key;
        }

        if (animations.length >= 2) {
            resolve(animations);
        } else {
            reject(-1);
        }
    });

export default insertionSort;
