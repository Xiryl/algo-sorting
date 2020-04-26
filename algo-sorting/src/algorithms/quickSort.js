const partition = (array, start, end, animations) => {
    const pivot = array[end]; // assume the pivot is the last element
    let pIndex = start;

    // move all elements less than pivot on the left
    for (let i = start; i <= end - 1; i += 1) {
        if (array[i] <= pivot) {
            // swap
            const tmp = array[i];

            animations.push({
                type: "swap",
                pivot,
                first: i,
                second: pIndex,
            });

            array[i] = array[pIndex];
            array[pIndex] = tmp;

            // increment pIndex
            pIndex += 1;
        }
    }

    // move pivot on the pIndex
    // swap
    const tmp = array[pIndex];

    animations.push({
        type: "swap",
        pivot,
        first: pIndex,
        second: end,
    });

    array[pIndex] = pivot;
    array[end] = tmp;

    // return partition index
    return pIndex;
};

const quickSortHelper = (array, start, end, animations) => {
    if (start < end) {
        const pIndex = partition(array, start, end, animations);
        quickSortHelper(array, start, pIndex - 1, animations); // sort left part
        quickSortHelper(array, pIndex + 1, end, animations); // sort right part
    }
};

const quickSort = (array) => {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
};

export default quickSort;
