import express from "express";
import cors from "cors";

export const server = express();

// configure, middleware from server
server.use(cors());
server.use(express.json());
