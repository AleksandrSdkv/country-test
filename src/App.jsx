import CountryesTable from "./components/CountryesTable";
import { useCountrys } from "./hooks/useCountrys";

function App() {
  const { isError, error } = useCountrys();
  if (isError) {
    return (
      <div className="flex m-72 bg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white p-6 rounded-xl">
        <h2>Во время загрузки страницы произошла ошибка: {error.message}</h2>
      </div>
    );
  }
  return (
    <>
      <CountryesTable />
    </>
  );
}

export default App;
