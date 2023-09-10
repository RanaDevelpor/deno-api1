import { MongoClient } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

const client = new MongoClient();
await client.connect("mongodb://127.0.0.1:27017");
const db = client.database("deno2");

export default db;
 