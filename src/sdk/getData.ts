import { Datum, Stock, Stocks } from "../types/data";
import { quickSortDates } from "./quickSort";
import { radixSortDates } from "./radixSort";
import data from "../data/stock_data.json";

/** Object containing all stock information by ticker */
type StockObject = { [ticker: string]: Stock }

/**
 * Gets the investment rating of a stock
 * 
 * @param data array of Datum from a given stock
 * @param range the time range to estimate the investment rating
 * @return investment rating
 */
const findInvestmentRating = (data: Array<Datum>, range = 30): number => {
    // If range is not set, set it to the last index
    let end = range === -1 ? data.length - 1 : range;

    // Stock rating
    let sumGap: number = 0;
    let dayCount: number = 0;
    let sumPrice = 0;


