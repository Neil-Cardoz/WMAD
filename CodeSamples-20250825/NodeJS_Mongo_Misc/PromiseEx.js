import { promises, readFile, writeFile } from 'fs';
const fs = promises;
fs.readFile('input.txt', 'utf8')
    .then(data => {
        const processed = data.toUpperCase();
        return fs.writeFile('output.txt', processed);
    })
    .then(() => {
        console.log("File processed and saved to output.txt");
    })
    .catch(err => {
        console.error("Error:", err);
    });

console.log("Processing file...");