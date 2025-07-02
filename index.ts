import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import { PORT } from "./config";
import { catchSwapEvent } from "./src";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = http.createServer(app);

// Start the Express server to listen on the specified port
server.listen(PORT, () => {
  console.log(`swap event server is running on port ${PORT}`);
  catchSwapEvent();
});
