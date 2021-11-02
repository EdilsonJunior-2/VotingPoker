import Chat from "../../components/chat";
import CardPoll from "../../components/cardPoll";
import UsersList from "../../components/users";
const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Chat />
      <CardPoll />
      <UsersList />
    </div>
  );
};

export default Home;
