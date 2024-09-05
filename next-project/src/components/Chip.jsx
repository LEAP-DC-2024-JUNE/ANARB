export const Chip = (props) => {
  const { title, description, color } = props;
  console.log(`bg-${color}-500`);
  return (
    <div>
      <p className={`bg-${color}-500`}>{title + description + color}</p>
    </div>
  );
};

// Object destructure
// const object = {name: "Christina", age: 12};
// const {name} = object;
// console.log(name);
