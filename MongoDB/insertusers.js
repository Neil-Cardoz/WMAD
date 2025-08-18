const { MongoClient } = require('mongodb');

// MongoDB connection URI (adjust if using Docker or Atlas)
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('school');
    const users = db.collection('users');

    // Sample user data
    const userData = [
      { name: 'Alice', marks: { subject1: 85, subject2: 92, subject3: 78, subject4: 88, subject5: 90 } },
      { name: 'Bob', marks: { subject1: 70, subject2: 65, subject3: 80, subject4: 75, subject5: 85 } },
      { name: 'Charlie', marks: { subject1: 95, subject2: 98, subject3: 92, subject4: 94, subject5: 96 } },
      { name: 'Diana', marks: { subject1: 60, subject2: 70, subject3: 65, subject4: 68, subject5: 72 } },
      { name: 'Evan', marks: { subject1: 88, subject2: 90, subject3: 85, subject4: 87, subject5: 89 } }
    ];

    // Insert users into the collection
    const result = await users.insertMany(userData);
    console.log(`${result.insertedCount} users inserted.`);
  } catch (err) {
    console.error('Error inserting users:', err);
  } finally {
    await client.close();
  }
}

run();
