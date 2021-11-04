import styled from "styled-components";
import { colors } from "../../styles/colors";

export const PollBox = styled.div`
  width: calc(60% - 60px);
  height: 700px;
  overflow: auto;
  font-family: sans-serif;
  background: ${colors.backgroundLight};
  padding: 30px;
`;

export const CardDetails = styled.div`
  padding: 15px 0;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonsBox = styled.div`
  display: flex;
`;
export const FinishCardButton = styled.h4`
  margin: 0 0 0 15px;
  color: ${colors.info};
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const CardDescription = styled.div`
  overflow: auto;
  height: 80px;
  margin: 10px 0;
`;

export const CardDescriptionUndefinedSize = styled.div`
  margin: 10px 0;
`;

export const PointsSelectionBox = styled.div``;

export const ConfirmButton = styled.button`
  border: none;
  background-color: ${colors.successLight};
  margin-bottom: 10px;
  padding: 10px;
  font-weight: bold;
  transition: 200ms;
  cursor: pointer;
  &:hover {
    background-color: ${colors.success};
  }
  &:disabled:hover {
    background-color: ${colors.successLight};
    cursor: initial;
  }
`;

export const PointsBox = styled.div``;

export const Points = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const EffortPoint = styled.div`
  background: ${(props: {
    value: number;
    pointsSelected: number;
    confirmVote: boolean;
  }) =>
    props.value === props.pointsSelected ? colors.success : colors.background};
  cursor: ${(props: { confirmVote: boolean }) =>
    props.confirmVote ? "initial" : "pointer"};
  opacity: ${(props: {
    value: number;
    pointsSelected: number;
    confirmVote: boolean;
  }) =>
    props.confirmVote && props.value !== props.pointsSelected ? "0.5" : "1"};
  font-weight: bold;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  height: 70px;
  margin: 5px;
  transition: 300ms;
`;

export const TimePoint = styled.div`
  background: ${(props: {
    value: number;
    pointsSelected: number;
    confirmVote: boolean;
  }) =>
    props.value === props.pointsSelected ? colors.success : colors.background};
  cursor: ${(props: { confirmVote: boolean }) =>
    props.confirmVote ? "initial" : "pointer"};
  opacity: ${(props: {
    value: number;
    pointsSelected: number;
    confirmVote: boolean;
  }) =>
    props.confirmVote && props.value !== props.pointsSelected ? "0.5" : "1"};
  font-weight: bold;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  height: 70px;
  margin: 5px;
  transition: 300ms;
`;

export const PollDetails = styled.div`
  display: grid;
  grid-template-columns: 60% 39%;
  grid-gap: 1%;
  min-height: 200px;
`;

export const AlreadyVoted = styled.div`
  background-color: ${colors.backgroundLighter};
  padding: 10px;
  border-radius: 20px;
`;

export const WhoAlreadyVoted = styled.div`
  margin: 10px 0;
`;

export const Consolidated = styled.div`
  height: 100%;
`;

export const ConsolidatedDetails = styled.div`
  display: flex;
  height: calc(100% - 48px);
  margin-top: 20px;
`;

export const ConsolidatedDetail = styled.div`
  width: 50%;
  min-width: 70px;
`;

export const ConsolidatedPoint = styled.div`
  color: ${colors.success};
  margin: 20px 0 0 15px;
`;

export const FinalPollDetails = styled.div`
  margin-bottom: 30px;
`;
