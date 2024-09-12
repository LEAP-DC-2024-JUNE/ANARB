import Login from "../components/Login";
import Role from "../components/Role";
import VIP from "../components/Vip";
import ListItems from "../components/ListItems";
const Exercise = () => {
  return (
    <div>
      <Login isLoggedIn={true} />
      <Role whichRole="no user" />
      <VIP isLoggedIn={true} isVIP={true} />
      <ListItems items={[`Item 1`, `Item 2`, `Item 3`]} />
    </div>
  );
};
export default Exercise;
