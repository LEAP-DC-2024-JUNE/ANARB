const LogicalOperator = () => {
  let loading = true;
  let obj = {
    name: "Anar",
    lastName: "Bolormaa",
  };
  return (
    <div>
      {/* {loading && <div>Loading</div>}
      {!loading && <div>Hi, Leap Guys</div>} */}
      {obj.name == "Anar" && obj.lastName == "Bolormaa" && <div>Welcome</div>}
      {obj.name !== "Anar" ||
        (obj.lastName !== "Bolormaa" && <div>Nevtreh erhgui bn</div>)}
    </div>
  );
};
export default LogicalOperator;
