import { server } from "./server";
import "dotenv/config";

// import connection database
import { connectDB } from "./db/config";

// import routes
import playerRouter from "./routes/player";
import { PlayerSeeder } from "./seeders/PlayersSeeder";

// route middlewares
server.use("/api/v1/players", playerRouter);

// turn on server for connect clients

(async () => {
  try {
    await connectDB();
    PlayerSeeder();
    server.listen(process.env.PORT, () => {
      console.log(`Server listenner on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
