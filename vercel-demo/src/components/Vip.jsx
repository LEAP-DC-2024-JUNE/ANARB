const Vip = (props) => {
  const { isLoggedIn, isVIP } = props;
  return (
    <div>
      {isLoggedIn && isVIP && <div>VIP Access</div>}
      {isLoggedIn || (!isVIP && <div> No VIP Access</div>)}
    </div>
  );
};
export default Vip;
