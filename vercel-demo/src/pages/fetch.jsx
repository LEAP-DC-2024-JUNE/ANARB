export default function Home() {
  fetch("https://dev.to/api/articles")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return <div>Hi</div>;
}
