import "./App.css";
import FetchResult from "./components/FetchResult";

const paths = [
  {
    id: 1,
    path: "/data",
  },
  {
    id: 2,
    path: "/loading",
  },
  {
    id: 3,
    path: "/error",
  },
];

function App() {
  return (
    <>
      <h1>Применение useJsonFetch</h1>
      {paths.map((item) => (
        <FetchResult key={item.id} path={item.path} />
      ))}
    </>
  );
}

export default App;
