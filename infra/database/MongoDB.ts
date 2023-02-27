import "dotenv/config";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${encodeURIComponent(
  process.env.DATABASE_USER || ""
)}:${encodeURIComponent(process.env.DATABASE_PASSWORD || "")}@${
  process.env.DATABASE_HOST
}/?retryWrites=true&w=majority`;

const MongoDB = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

MongoDB.connect();

const connection = MongoDB.db(process.env.DATABASE_NAME);

export { connection };
