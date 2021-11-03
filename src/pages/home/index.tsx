import Chat from "../../components/chat";
import CardPoll from "../../components/cardPoll";
import UsersList from "../../components/users";
import { HomeDiv } from "./styles";
const Home: React.FC = () => {
  return (
    <HomeDiv>
      <Chat />
      <CardPoll />
      <UsersList />
    </HomeDiv>
  );
};

export default Home;
