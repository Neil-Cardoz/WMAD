import { promises, readFile, writeFile } from 'fs';
const fs = promises;
async function processFile() {
    try {
        const data = await fs.readFile('input.txt', 'utf8');
        const processed = data.toUpperCase();
        await fs.writeFile('output.txt', processed);
        console.log("File processed and saved to output.txt");
    } catch (err) {
        console.error("Error:", err);
    }
}

processFile();
console.log("Processing file...");