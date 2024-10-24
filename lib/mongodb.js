import { MongoClient, Db } from "mongodb";

const MONGODB_URL = process.env.NEXT_MONGODB_URI ?? "";
const dbName = "newsletter";

if (!MONGODB_URL) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URL);
  await client.connect();
  

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}