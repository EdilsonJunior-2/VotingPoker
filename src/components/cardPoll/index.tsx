import { useState } from "react";
import {
  CardDetails,
  CardTitle,
  ButtonsBox,
  FinishCardButton,
  PollBox,
  CardDescription,
  PointsSelectionBox,
  PointsBox,
  Points,
  EffortPoint,
  TimePoint,
  PollDetails,
  WhoAlreadyVoted,
  AlreadyVoted,
  Consolidated,
  ConsolidatedDetails,
  ConsolidatedDetail,
  ConsolidatedPoint,
  CardDescriptionUndefinedSize,
  FinalPollDetails,
  ConfirmButton,
} from "./styles";
import { H2, H3 } from "../../styles/titles";
import { useEffort } from "../../lib/effort";
import { useTime } from "../../lib/time";
import { cards } from "../../assets";
import { points } from "../../lib/interfaces";

const CardPoll: React.FC = () => {
  const [whoVotedArray, setWhoVotedArray] = useState<string[]>([]);
  const [actualCard, setActualCard] = useState<number>(0);
  const [pollFinished, setPollFinished] = useState<boolean>(false);
  const [allPoints, setAllPoints] = useState<points[]>([]);

  const {
    selectEffortPoints,
    registerEffortVote,
    calcFinalEffortPoints,
    finalEffortPoints,
    effortPointsSelected,
    confirmEffortVote,
    finishEffortPoll,
  } = useEffort();

  const {
    selectTimePoints,
    registerTimeVote,
    calcFinalTimePoints,
    finalTimePoints,
    timePointsSelected,
    confirmTimeVote,
    finishTimePoll,
  } = useTime();

  function finishPoll() {
    calcFinalEffortPoints();
    calcFinalTimePoints();
    setPollFinished(true);
  }

  function finishCard() {
    const p = allPoints.slice();
    p.push({
      effort: finalEffortPoints,
      time: finalTimePoints,
    });
    setAllPoints(p);
    finishEffortPoll();
    finishTimePoll();
    setWhoVotedArray([]);
    setActualCard((actualCard) => actualCard + 1);
    setPollFinished(false);
  }

  return (
    <PollBox>
      <CardDetails>
        <CardTitle>
          <H2>{cards[actualCard]?.name || "Finished"}</H2>
          {actualCard !== cards.length && (
            <ButtonsBox>
              <FinishCardButton onClick={() => finishPoll()}>
                Finish Poll
              </FinishCardButton>
              <FinishCardButton onClick={() => finishCard()}>
                Finish Card
              </FinishCardButton>
            </ButtonsBox>
          )}
        </CardTitle>
        <CardDescription>
          {cards[actualCard]?.description ||
            "You finished all cards, congratulations :)"}
        </CardDescription>
      </CardDetails>
      {actualCard === cards.length ? (
        cards.map((card, index) => (
          <FinalPollDetails key={card.id}>
            <H3>{card.name}</H3>
            <CardDescriptionUndefinedSize>
              {card.description}
            </CardDescriptionUndefinedSize>
            <CardDescriptionUndefinedSize>
              Effort points: {allPoints[index].effort}
            </CardDescriptionUndefinedSize>
            <CardDescriptionUndefinedSize>
              Time points: {allPoints[index].time}
            </CardDescriptionUndefinedSize>
          </FinalPollDetails>
        ))
      ) : (
        <PointsSelectionBox>
          <PointsBox>
            <H2>Effort</H2>
            <Points>
              <EffortPoint
                onClick={() => selectEffortPoints(1)}
                value={1}
                pointsSelected={effortPointsSelected}
                confirmVote={confirmEffortVote}
              >
                1
              </EffortPoint>
              <EffortPoint
                onClick={() => selectEffortPoints(2)}
                value={2}
                pointsSelected={effortPointsSelected}
                confirmVote={confirmEffortVote}
              >
                2
              </EffortPoint>
              <EffortPoint
                onClick={() => selectEffortPoints(3)}
                value={3}
                pointsSelected={effortPointsSelected}
                confirmVote={confirmEffortVote}
              >
                3
              </EffortPoint>
              <EffortPoint
                onClick={() => selectEffortPoints(5)}
                value={5}
                pointsSelected={effortPointsSelected}
                confirmVote={confirmEffortVote}
              >
                5
              </EffortPoint>
              <EffortPoint
                onClick={() => selectEffortPoints(8)}
                value={8}
                pointsSelected={effortPointsSelected}
                confirmVote={confirmEffortVote}
              >
                8
              </EffortPoint>
              <EffortPoint
                onClick={() => selectEffortPoints(13)}
                value={13}
                pointsSelected={effortPointsSelected}
                confirmVote={confirmEffortVote}
              >
                13
              </EffortPoint>
              <EffortPoint
                onClick={() => selectEffortPoints(21)}
                value={21}
                pointsSelected={effortPointsSelected}
                confirmVote={confirmEffortVote}
              >
                21
              </EffortPoint>
            </Points>
            <H2>Time</H2>
            <Points>
              <TimePoint
                onClick={() => selectTimePoints(1)}
                value={1}
                pointsSelected={timePointsSelected}
                confirmVote={confirmTimeVote}
              >
                1
              </TimePoint>
              <TimePoint
                onClick={() => selectTimePoints(2)}
                value={2}
                pointsSelected={timePointsSelected}
                confirmVote={confirmTimeVote}
              >
                2
              </TimePoint>
              <TimePoint
                onClick={() => selectTimePoints(3)}
                value={3}
                pointsSelected={timePointsSelected}
                confirmVote={confirmTimeVote}
              >
                3
              </TimePoint>
              <TimePoint
                onClick={() => selectTimePoints(5)}
                value={5}
                pointsSelected={timePointsSelected}
                confirmVote={confirmTimeVote}
              >
                5
              </TimePoint>
              <TimePoint
                onClick={() => selectTimePoints(8)}
                value={8}
                pointsSelected={timePointsSelected}
                confirmVote={confirmTimeVote}
              >
                8
              </TimePoint>
              <TimePoint
                onClick={() => selectTimePoints(13)}
                value={13}
                pointsSelected={timePointsSelected}
                confirmVote={confirmTimeVote}
              >
                13
              </TimePoint>
              <TimePoint
                onClick={() => selectTimePoints(21)}
                value={21}
                pointsSelected={timePointsSelected}
                confirmVote={confirmTimeVote}
              >
                21
              </TimePoint>
            </Points>
            <ConfirmButton
              onClick={() => {
                if (
                  effortPointsSelected !== 0 &&
                  timePointsSelected !== 0 &&
                  !pollFinished
                ) {
                  registerEffortVote("Pedro");
                  registerTimeVote("Pedro");
                  const newName = whoVotedArray.slice();
                  newName.push("Pedro");
                  setWhoVotedArray(newName);
                  setPollFinished(true);
                }
              }}
              disabled={pollFinished}
            >
              Confirm
            </ConfirmButton>
          </PointsBox>
          <PollDetails>
            <AlreadyVoted>
              <H3>Already Voted</H3>
              {whoVotedArray.map((name) => (
                <WhoAlreadyVoted key={name}>{name}</WhoAlreadyVoted>
              ))}
            </AlreadyVoted>
            <Consolidated>
              <H3>Consolidated</H3>
              <ConsolidatedDetails>
                <ConsolidatedDetail>
                  <H3>Effort</H3>
                  <ConsolidatedPoint>
                    {finalEffortPoints || "?"}
                  </ConsolidatedPoint>
                </ConsolidatedDetail>
                <ConsolidatedDetail>
                  <H3>Time</H3>
                  <ConsolidatedPoint>
                    {finalTimePoints || "?"}
                  </ConsolidatedPoint>
                </ConsolidatedDetail>
              </ConsolidatedDetails>
            </Consolidated>
          </PollDetails>
        </PointsSelectionBox>
      )}
    </PollBox>
  );
};

export default CardPoll;
