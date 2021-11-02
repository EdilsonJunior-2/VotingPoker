import Chat from "../../components/chat";
import CardPoll from "../../components/cardPoll";
import Users from "../../components/users";
const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Chat />
      <CardPoll />
      <Users />
    </div>
  );
};

export default Home;
