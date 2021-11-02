import { useState } from "react";
import { poll } from "./interfaces";

export const useTime = () => {
  const [times, setTimes] = useState<poll[]>([]);
  const [timePointsSelected, setTimePointsSelected] = useState<number>(0);
  const [finalTimePoints, setFinalTimePoints] = useState<number>(0);
  const [confirmTimeVote, setConfirmTimeVote] = useState(false);

  function selectTimePoints(points: number) {
    !confirmTimeVote && setTimePointsSelected(points);
  }

  function registerTimeVote(whoVoted: string) {
    const e = times.slice();
    e.push({
      name: whoVoted,
      points: timePointsSelected,
    });
    setTimes(e);
    setConfirmTimeVote(true);
  }

  function calcFinalTimePoints() {
    let sum = 0;

    for (const time of times) {
      sum += time.points;
    }

    setFinalTimePoints(sum);
  }

  function finishTimePoll() {
    times.splice(0, times.length);
    setTimePointsSelected(0);
    setFinalTimePoints(0);
    setConfirmTimeVote(false);
  }

  return {
    selectTimePoints,
    registerTimeVote,
    calcFinalTimePoints,
    finalTimePoints,
    timePointsSelected,
    confirmTimeVote,
    finishTimePoll,
  };
};
