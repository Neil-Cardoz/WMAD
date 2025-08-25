import { readFile, writeFile } from 'fs';

readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading input file:", err);
        return;
    }

    const processed = data.toUpperCase();

    writeFile('output.txt', processed, (err) => {
        if (err) {
            console.error("Error writing output file:", err);
            return;
        }
        console.log("File processed and saved to output.txt");
    });
});