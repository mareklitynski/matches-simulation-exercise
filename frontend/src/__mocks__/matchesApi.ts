import { Message } from "../matchesApi";

type ScoreData = (Message & { type: "scores" })["data"];

const scores: ScoreData[] = [
  { id: "2", finish: false, result: [0, 1] },
  { id: "1", finish: false, result: [1, 0] },
  { id: "2", finish: true, result: [1, 1] },
];

const matchesApi = () => {
  let callback: (message: Message) => void;

  return {
    init: jest.fn(),
    subscribe(subscriber: (message: Message) => void) {
      callback = subscriber;
    },
    send(message: string) {
      if (message === "matches") {
        process.nextTick(() =>
          callback({
            type: "matches",
            data: [
              { id: "1", teamA: "Test1", teamB: "Test2" },
              { id: "2", teamA: "Other1", teamB: "Other2" },
            ],
          })
        );
      }
      if (message === "start") {
        const scoresIterator = scores.entries();

        const nextMessage = () =>
          setTimeout(() => {
            const nextScore = scoresIterator.next();

            if (!nextScore.done) {
              const [, data] = nextScore.value;
              callback({ type: "scores", data });
              nextMessage();
            }
          });

        nextMessage();
      }
    },
  };
};

export default matchesApi();
