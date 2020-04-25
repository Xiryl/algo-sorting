/* eslint-disable prefer-promise-reject-errors */
const mergeSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
};

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(
        auxiliaryArray,
        middleIdx + 1,
        endIdx,
        mainArray,
        animations
    );
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push({
                type: "swap",
                pos: k,
                val: auxiliaryArray[i],
            });

            mainArray[k++] = auxiliaryArray[i++];
        } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.

            animations.push({
                type: "swap",
                pos: k,
                val: auxiliaryArray[j],
            });
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push({
            type: "swap",
            pos: k,
            val: auxiliaryArray[i],
        });
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push({
            type: "swap",
            pos: k,
            val: auxiliaryArray[j],
        });
        mainArray[k++] = auxiliaryArray[j++];
    }
}

/**

const merge = (left, right, arr, animations) => {
    const sizeLeft = left.length;
    const sizeright = right.length;

    // i, index of smallest value in left
    // j, index of smallest value in right
    // k, index on arr
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < sizeLeft && j < sizeright) {
        if (left[i] <= right[j]) {
            // swap
            arr[k] = left[i];
            const swap = {
                key: left[i],
                a: k,
                b: i,
            };
            animations.push(swap);

            ++i;
        } else {
            // swap
            arr[k] = right[j];
            const swap = {
                key: right[j],
                a: k,
                b: j,
            };
            animations.push(swap);

            ++j;
        }
        ++k;
    }

    // if left contains another values
    while (i < sizeLeft) {
        // swap

        arr[k] = left[i];
        const swap = {
            key: left[i],
            a: k,
            b: i,
        };
        animations.push(swap);

        ++i;
        ++k;
    }

    // if arrRight contains another values
    while (j < sizeright) {
        // swap

        arr[k] = right[j];
        const swap = {
            key: right[j],
            a: k,
            b: j,
        };
        animations.push(swap);

        ++j;
        ++k;
    }
};

const mergeSort = (arr, animations) => {
    const size = arr.length;

    if (size < 2) {
        return;
    }

    const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
    const left = arr.slice(0, middle); // items on the left side
    const right = arr.slice(middle); // items on the right side

    mergeSort(left, animations);
    mergeSort(right, animations);
    merge(left, right, arr, animations);

    console.log(animations);
};

export default mergeSort;

 */
export default mergeSort;
