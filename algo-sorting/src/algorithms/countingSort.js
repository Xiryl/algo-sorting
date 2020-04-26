const maxValueInArray = (arr) => {
    let max = -1;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

const countingSort = (arr) => {
    const animations = [];
    const len = arr.length;
    const maxValue = maxValueInArray(arr);

    const count = [];
    for (let i = 0; i <= maxValue; i += 1) {
        count.push(0);
    }
    const output = [...arr];

    // count occurrence on corrisponding index
    for (let i = 0; i < len; i += 1) {
        const idx = arr[i];
        count[idx] += 1;
        // first scan
        animations.push({
            type: "comparison",
            pos: i,
            val: i,
        });
    }

    // add the previous count to the actual
    for (let i = 1; i <= maxValue; i += 1) {
        // second scan
        animations.push({
            type: "comparison",
            pos: i,
            val: i - 1,
        });
        count[i] += count[i - 1];
    }

    // sort
    for (let i = len - 1; i >= 0; i -= 1) {
        const idxValue = arr[i];
        const pos = count[idxValue] - 1;
        animations.push({
            type: "swap",
            pos,
            val: arr[i],
        });
        output[count[idxValue] - 1] = arr[i];
        count[arr[i]] -= 1; // number taken
    }

    return animations;
};

export default countingSort;
