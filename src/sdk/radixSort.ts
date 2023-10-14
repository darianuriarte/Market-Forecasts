import { Datum } from "../types/data";

/**
 * Gets the latest date in the array of datum
 *
 * @param arr array with datum
 * @return maximum value in the array
 */
const getMaxDate = (arr: Array<Datum>): number => {
    // Find the max number
    let max = arr[0].date.getTime();
    for (let i = 1; i < arr.length; i++)
        if (arr[i].date.getTime() > max) max = arr[i].date.getTime();

    // Return the max numbe of the array
    return max;
};

/**
 * Radix Sort
 * 
 * @param arr array of datum
 * @return sorted array of datum by date
 */
const radixSortDates = (arr: Array<Datum>): Array<Datum> => {

};

export { radixSortDates };
