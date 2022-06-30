import { Message } from "../matchesApi";

type ScoreData = (Message & { type: "scores" })["data"];

const scores: ScoreData[] = [
  { id: "2", finish: false, result: [0, 1] },
  { id: "1", finish: false, result: [1, 0] },
  { id: "2", finish: true, result: [1, 1] },
];

class MatchesApi {
  callback: ((message: Message) => void) | undefined;

  connect = jest.fn();
  subscribe(subscriber: (message: Message) => void) {
    this.callback = subscriber;
  }
  requestMatches() {
    process.nextTick(() =>
      this.callback?.({
        type: "matches",
        data: [
          { id: "1", teamA: "Test1", teamB: "Test2" },
          { id: "2", teamA: "Other1", teamB: "Other2" },
        ],
      })
    );
  }
  requestStart() {
    const scoresIterator = scores.entries();

    const nextMessage = () =>
      setTimeout(() => {
        const nextScore = scoresIterator.next();

        if (!nextScore.done) {
          const [, data] = nextScore.value;
          this.callback?.({ type: "scores", data });
          nextMessage();
        }
      });

    nextMessage();
  }
}

export default new MatchesApi();
