import { useState } from "react";
import { poll } from "./interfaces";

export const useEffort = () => {
  const [efforts, setEfforts] = useState<poll[]>([]);
  const [effortPointsSelected, setEffortPointsSelected] = useState<number>(0);
  const [finalEffortPoints, setFinalEffortPoints] = useState<number>(0);
  const [confirmEffortVote, setConfirmEffortVote] = useState(false);

  function selectEffortPoints(points: number) {
    !confirmEffortVote && setEffortPointsSelected(points);
  }

  function registerEffortVote(whoVoted: string) {
    const e = efforts.slice();
    e.push({
      name: whoVoted,
      points: effortPointsSelected,
    });
    setEfforts(e);
    setConfirmEffortVote(true);
  }

  function calcFinalEffortPoints() {
    let sum = 0;

    for (const effort of efforts) {
      sum += effort.points;
    }

    setFinalEffortPoints(sum);
  }

  function finishEffortPoll() {
    efforts.splice(0, efforts.length);
    setEffortPointsSelected(0);
    setFinalEffortPoints(0);
    setConfirmEffortVote(false);
  }

  return {
    selectEffortPoints,
    registerEffortVote,
    calcFinalEffortPoints,
    finalEffortPoints,
    effortPointsSelected,
    confirmEffortVote,
    finishEffortPoll,
  };
};
