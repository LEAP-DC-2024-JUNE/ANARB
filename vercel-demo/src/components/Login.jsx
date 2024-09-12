const Login = (props) => {
  const { isLoggedIn } = props;
  return (
    <div>{isLoggedIn ? <div>Logged In</div> : <div>Please Log In</div>}</div>
  );
};
export default Login;
