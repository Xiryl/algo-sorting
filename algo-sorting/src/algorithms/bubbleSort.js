/* eslint-disable prefer-promise-reject-errors */
const bubbleSort = (generatedNumbers) =>
    new Promise((resolve, reject) => {
        const animations = [];
        const numbers = [...generatedNumbers];

        const len = numbers.length;

        for (let i = 0; i < len - 1; i += 1) {
            for (let j = 0; j < len - 1 - i; j += 1) {
                // animations.push({
                //     type: "comparison",
                //     first: j,
                //     second: j + 1,
                //      sortedByIndex: len - 1 - i,
                // });

                if (numbers[j] > numbers[j + 1]) {
                    animations.push({
                        type: "swap",
                        first: j + 1,
                        second: j,
                        sortedByIndex: len - 1 - i,
                    });

                    const tmp = numbers[j + 1];
                    numbers[j + 1] = numbers[j];
                    numbers[j] = tmp;
                }
            }
        }

        if (animations.length >= 2) {
            resolve(animations);
        } else {
            reject(-1);
        }
    });

export default bubbleSort;
