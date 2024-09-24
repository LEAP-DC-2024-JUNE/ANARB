const Skill = (props) => {
  const { icon, iconName } = props;
  return (
    <div className="flex flex-col gap-2 items-center">
      <div>{icon}</div>
      <p>{iconName}</p>
    </div>
  );
};
export default Skill;
