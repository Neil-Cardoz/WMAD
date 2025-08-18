const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB!');
    const db = client.db('testdb');
    // Do stuff with db
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
