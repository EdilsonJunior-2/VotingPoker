import {
  CardDetails,
  H2,
  CardTitle,
  FinishCardButton,
  PollBox,
  CardDescription,
  PointsSelectionBox,
  PointsBox,
  Points,
  Point,
  PollDetails,
  H3,
  WhoAlreadyVoted,
  AlreadyVoted,
  Consolidated,
  ConsolidatedDetails,
  ConsolidatedDetail,
  ConsolidatedPoint,
} from "./styles";

const CardPoll: React.FC = () => {
  return (
    <PollBox>
      <CardDetails>
        <CardTitle>
          <H2>Card Name</H2>
          <FinishCardButton>Finish Card</FinishCardButton>
        </CardTitle>
        <CardDescription>
          Card Description Card Description Card Description Card Description
          Card Description Card Description Card Description Card Description
          Card Description Card Description Card Description Card Description
          Card Description Card Description Card Description Card Description
        </CardDescription>
      </CardDetails>
      <PointsSelectionBox>
        <PointsBox>
          <H2>Effort</H2>
          <Points>
            <Point>1</Point>
            <Point>2</Point>
            <Point>3</Point>
            <Point>5</Point>
            <Point>8</Point>
            <Point>13</Point>
            <Point>21</Point>
            <Point>?</Point>
          </Points>
          <H2>Time</H2>
          <Points>
            <Point>1</Point>
            <Point>2</Point>
            <Point>3</Point>
            <Point>5</Point>
            <Point>8</Point>
            <Point>13</Point>
            <Point>21</Point>
            <Point>?</Point>
          </Points>
        </PointsBox>
        <PollDetails>
          <AlreadyVoted>
            <H3>Already Voted</H3>
            <WhoAlreadyVoted>Name1</WhoAlreadyVoted>
            <WhoAlreadyVoted>Name2</WhoAlreadyVoted>
          </AlreadyVoted>
          <Consolidated>
            <H2>Consolidated</H2>
            <ConsolidatedDetails>
              <ConsolidatedDetail>
                <H3>Effort</H3>
                <ConsolidatedPoint>1</ConsolidatedPoint>
              </ConsolidatedDetail>
              <ConsolidatedDetail>
                <H3>Time</H3>
                <ConsolidatedPoint>1</ConsolidatedPoint>
              </ConsolidatedDetail>
            </ConsolidatedDetails>
          </Consolidated>
        </PollDetails>
      </PointsSelectionBox>
    </PollBox>
  );
};

export default CardPoll;
