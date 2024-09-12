const Role = (props) => {
  const { whichRole } = props;
  switch (whichRole) {
    case "admin":
      return <div>Admin Userboard</div>;
    case "user":
      return <div>User Dashboard</div>;
    default:
      return <div>Access Denied</div>;
  }
  return whichRole;
};
export default Role;
