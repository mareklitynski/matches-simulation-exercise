export type Message =
  | {
      type: "scores";
      data: { finish: boolean; id: string; result: [number, number] };
    }
  | { type: "matches"; data: { id: string; teamA: string; teamB: string }[] };

class MatchesApi {
  private webSocket: WebSocket | undefined;
  private untilOpen: Promise<unknown> | undefined;

  private async send(message: string) {
    await this.untilOpen;
    this.webSocket?.send(message);
  }

  connect() {
    if (this.webSocket) {
      this.webSocket.close();
      this.untilOpen = undefined;
    }
    this.webSocket = new WebSocket(process.env.REACT_APP_API as string);
    this.untilOpen = new Promise((resolve) =>
      this.webSocket?.addEventListener("open", resolve)
    );
  }

  requestMatches() {
    this.send("matches");
  }

  requestStart() {
    this.send("start");
  }

  requestStop() {
    this.send("stop");
  }

  subscribe(callback: (message: Message) => void) {
    const handleMessage = ({ data }: { data: string }) =>
      callback(JSON.parse(data));

    this.webSocket?.addEventListener("message", handleMessage);

    return () => this.webSocket?.removeEventListener("message", handleMessage);
  }
}

export default new MatchesApi();
