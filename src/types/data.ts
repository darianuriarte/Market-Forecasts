/** Datum object from "API" */
export type Datum = {
    date: Date;
    price: number;
    dcf: number;
    name: string;

};

/** Processed data to be delivered to Frontend */
export type Stocks = Array<Stock>;
