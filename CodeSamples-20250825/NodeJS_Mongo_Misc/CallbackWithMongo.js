import { MongoClient } from "mongodb";
import { writeFile } from "fs";

// MongoDB connection string
const uri = "mongodb://localhost:27017";   // adjust if needed
const client = new MongoClient(uri);
const dbName = "demodb";
const collectionName = "users";
//In mongodb Node.js driver v4+, the callback style is not supported.
//All APIs return promises only.
function fetchUsersWithCallback() {
    client.connect()
        .then(() => {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);

            // Simulate callback style using toArray() promise
            collection.find().toArray()
                .then(docs => {
                    const names = docs.map(u => `${u.firstName} ${u.lastName}`).join("\n");
                    writeFile("users-callback.txt", names, (err) => {
                        if (err) {
                            console.error("Callback - Error writing file:", err);
                            return;
                        }
                        console.log("✅ Callback (simulated) - User data saved to users-callback.txt");
                        client.close();
                    });
                })
                .catch(err => {
                    console.error("Callback - Error fetching docs:", err);
                });
        })
        .catch(err => {
            console.error("Callback - MongoDB connection error:", err);
        });
}


console.log(" Fetching user data from MongoDB...");

fetchUsersWithCallback();