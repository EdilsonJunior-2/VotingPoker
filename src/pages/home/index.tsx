import Chat from "../../components/chat";
import CardPoll from "../../components/cardPoll";
const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Chat />
      <CardPoll />
    </div>
  );
};

export default Home;
