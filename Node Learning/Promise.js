import {promises, readFile, writeFile} from 'fs';
const fs = promises;

fs.readFile('input.txt', 'utf')
    .then(data => {
        const processed = data.toUppeCase();
        return fs.writeFile("output.txt", processed);

    })
    .then(() => {
    console.log("File processed and saved to output.txt");
    })
