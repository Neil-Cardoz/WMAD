

const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream('input.csv')
  .pipe(csv())
  .on('data', (row) => {
    const marks1 = parseFloat(row.Marks1);
    const marks2 = parseFloat(row.Marks2);
    const marks3 = parseFloat(row.Marks3);

    const avg = (marks1 + marks2 + marks3) / 3;

    console.log(`StudentID: ${row.StudentID}, Average Marks: ${avg.toFixed(2)}`);
  })
  .on('end', () => {
    console.log('CSV file successfully processed.');
  });
