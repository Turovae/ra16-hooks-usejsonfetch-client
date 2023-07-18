import useJsonFetch from "../hooks/useJsonFetch";
import Loading from "./Loading/Loading";
import "./FetchResult.css";
const URL = import.meta.env.VITE_URL || "http://localhost:5173/";

function FetchResult({ path }: { path: string }) {
  const [data, loading, error] = useJsonFetch(URL + path);

  return (
    <div className="fetch-result">
      <h2>Получение данных по маршруту: {path}</h2>
      <div>Статус данных: {data.status}</div>
      {loading && <Loading />}
      <div>Ошибка: {error ? error.message : "нет"}</div>
    </div>
  );
}

export default FetchResult;
