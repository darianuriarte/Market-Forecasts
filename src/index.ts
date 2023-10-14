import express, { Request, Response } from "express";
import { fileURLToPath } from "url";
import path from "path";
import { getProcessedData, findInvestmentRating } from "./sdk/getData";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8000;

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// this is the route to our api :)
app.get("/api", (req: Request, res: Response) => {
    res.send("Hello there welcome to our API !!!");
});

// Send unsorted data
app.get("/api/data", (req: Request, res: Response) => {
    const { method } = req.query; // get sorting method


    res.send({ investmentRating: findInvestmentRating(stock?.data, rangeNum) });
});

// hosts our frontend on the route of localhost:8000
app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Listening on port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
