import express from "express";
import cors from "cors";
import router from "./routes";

const server = express();

server.use(express.json());
server.use(cors());

server.use(router);

server.listen(3333, () => console.log("🔥 Server on port 3333"));
