import dotenv from "dotenv";
import { connectDB } from "../api/config/db";
dotenv.config();

import "./processor/job-processor";


async function startWorker() {
  await connectDB();
  console.log("👷 Worker started and listening for jobs");
}

startWorker();
