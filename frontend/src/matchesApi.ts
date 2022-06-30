export type Message =
  | {
      type: "scores";
      data: { finish: boolean; id: string; result: [number, number] };
    }
  | { type: "matches"; data: { id: string; teamA: string; teamB: string }[] };

const matchesApi = () => {
  let webSocket: WebSocket;
  let waitUntilOpen: Promise<unknown>;

  return {
    init() {
      if (webSocket) {
        webSocket.close();
      }

      webSocket = new WebSocket(process.env.REACT_APP_API as string);

      waitUntilOpen = new Promise((resolve) =>
        webSocket.addEventListener("open", resolve)
      );
    },
    async send(message: string) {
      await waitUntilOpen;
      webSocket.send(message);
    },
    subscribe(callback: (message: Message) => void) {
      const handleMessage = ({ data }: { data: string }) =>
        callback(JSON.parse(data));

      webSocket.addEventListener("message", handleMessage);

      return () => webSocket.removeEventListener("message", handleMessage);
    },
  };
};

export default matchesApi();
