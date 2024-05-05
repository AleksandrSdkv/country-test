import { useCountrys } from "../hooks/useCountrys";
import CountryCard from "./CountryCard";

function CountryesTable() {
  const { data, isLoading, isError, error } = useCountrys();
  if (isError) {
    return (
      <div className="flex m-72 bg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white p-6 rounded-xl">
        <h2>Во время загрузки страницы произошла ошибка: {error.message}</h2>
      </div>
    );
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mt-4">
        Countrys:
      </h1>
      <div className="cursor-pointer grid grid-cols-5 mt-8 ml-10 mr-10  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-3 rounded-lg w-11/12 gap-4">
        {isLoading ? (
          <div className="text-white text-xl">Loading...</div>
        ) : (
          data.map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.png}
              capital={country.capital}
            />
          ))
        )}
      </div>
    </>
  );
}

export default CountryesTable;
