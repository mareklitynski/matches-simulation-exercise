import { WebSocketServer } from "ws";
import config from "config";

import score from "./score";
import matches from "./matches.json";

const wss = new WebSocketServer({ port: config.get<number>("port") });

wss.on("connection", (ws) => {
  let interval: NodeJS.Timer;

  ws.on("message", (message) => {
    if (message.toString() === "stop") {
      clearInterval(interval);
    }

    if (message.toString() === "matches") {
      ws.send(JSON.stringify({ type: "matches", data: matches }));
    }

    if (message.toString() === "start") {
      clearInterval(interval);
      const scores = score(config.get<number>("maxGoals"));

      interval = setInterval(() => {
        const nextResults = scores.next();

        ws.send(
          JSON.stringify({
            type: "scores",
            data: { finish: nextResults.done, ...nextResults.value },
          })
        );

        if (nextResults.done) {
          clearInterval(interval);
        }
      }, config.get<number>("interval"));
    }
  });
});
