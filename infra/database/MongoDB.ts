import "dotenv/config";
import { MongoClient, ServerApiVersion } from "mongodb";


const MongoDB = new MongoClient(process.env.MONGODB_URI, {
  serverApi: ServerApiVersion.v1,
});

MongoDB.connect();

const connection = MongoDB.db(process.env.DATABASE_NAME);

export { connection };
