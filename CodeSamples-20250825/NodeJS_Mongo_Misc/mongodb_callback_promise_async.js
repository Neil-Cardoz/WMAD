import { MongoClient } from "mongodb";
import { writeFile } from "fs";                 // For Callbacks
import { promises as fsPromises } from "fs"; // For Promises & Async/Await

// MongoDB connection string
const uri = "mongodb://localhost:27017";   // adjust if needed
const client = new MongoClient(uri);
const dbName = "demodb";
const collectionName = "users";

//-----------------------------------
// 1. Using CALLBACKS
//-----------------------------------
function fetchUsersWithCallback() {
    client.connect((err) => {
        if (err) {
            console.error("Callback - MongoDB connection error:", err);
            return;
        }
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        collection.find().toArray((err, docs) => {
            if (err) {
                console.error("Callback - Error fetching docs:", err);
                return;
            }

            const names = docs.map(u => `${u.firstName} ${u.lastName}`).join("\n");
            writeFile("users-callback.txt", names, (err) => {
                if (err) {
                    console.error("Callback - Error writing file:", err);
                    return;
                }
                console.log("✅ Callback - User data saved to users-callback.txt");
                client.close();
            });
        });
    });
}

//-----------------------------------
// 2. Using PROMISES
//-----------------------------------
function fetchUsersWithPromise() {
    client.connect()
        .then(() => {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            return collection.find().toArray();
        })
        .then(docs => {
            const names = docs.map(u => `${u.firstName} ${u.lastName}`).join("\n");
            return fsPromises.writeFile("users-promise.txt", names);
        })
        .then(() => {
            console.log("✅ Promise - User data saved to users-promise.txt");
            return client.close();
        })
        .catch(err => {
            console.error("Promise - Error:", err);
        });
}

//-----------------------------------
// 3. Using ASYNC/AWAIT
//-----------------------------------
async function fetchUsersWithAsyncAwait() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const docs = await collection.find().toArray();
        const names = docs.map(u => `${u.firstName} ${u.lastName}`).join("\n");

        await fsPromises.writeFile("users-async.txt", names);
        console.log("✅ Async/Await - User data saved to users-async.txt");
    } catch (err) {
        console.error("Async/Await - Error:", err);
    } finally {
        await client.close();
    }
}

//-----------------------------------
// Run all three versions
//-----------------------------------
console.log("🚀 Fetching user data from MongoDB...");

fetchUsersWithCallback();
fetchUsersWithPromise();
fetchUsersWithAsyncAwait();
