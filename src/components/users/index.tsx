import { H2 } from "../../styles/titles";
import { User, UsersBox, Users } from "./styles";
import { users } from "../../assets";
const UsersList: React.FC = () => {
  return (
    <UsersBox>
      <H2>Users Online</H2>
      <Users>
        {users.map((user) => (
          <User key={user.id}>{user.name}</User>
        ))}
      </Users>
    </UsersBox>
  );
};

export default UsersList;
