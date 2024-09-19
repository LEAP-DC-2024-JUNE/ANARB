const ListItems = (props) => {
  const { items } = props;
  return (
    <div>
      {items.length == 0 && <div>No Items Available</div>}
      {items.length > 0 && (
        <div className="flex gap-4">
          {items.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
      )}
    </div>
  );
};
export default ListItems;
