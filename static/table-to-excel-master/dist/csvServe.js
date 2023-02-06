const needle = require("needle");
const Papa = require("papaparse");
const map = require("tableToExcel");


const results = [];
const options = { header: true };

const csvDatasetUrl = "https://people.sc.fsu.edu/~jburkardt/data/csv/deniro.csv";

TabletoExcel = function() {
    needle
    .get(csvDatasetUrl)
    .pipe(Papa.parse(Papa.NODE_STREAM_INPUT, options))
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", (map) => {
      console.log(results, map);
    });
}

