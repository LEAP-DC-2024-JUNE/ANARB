const Test = async () => {
  const data = await fetch("https://dev.to/api/articles?per_page=1").then(
    (response) => response.json()
  );
  console.log(data);
  return <div>Test page</div>;
};
export default Test;
