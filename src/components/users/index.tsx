import { H2 } from "../../styles/titles";
import { User, UsersBox, Users } from "./styles";

const UsersList: React.FC = () => {
  return (
    <UsersBox>
      <H2>Users Online</H2>
      <Users>
        <User>Name 1</User>
        <User>Name 1</User>
      </Users>
    </UsersBox>
  );
};

export default UsersList;
