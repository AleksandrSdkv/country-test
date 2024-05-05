import { useNavigate } from "react-router-dom";

function CountryCard({ name, flag, capital }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        console.log("sds");

        navigate(`/country/${name}`);
      }}
      className="hover:scale-105 hover:opacity-85 rounded-lg p-4 flex flex-col justify-between border bg-gradient-to-r from-indigo-500"
    >
      <h2 className="text-white text-m ">Country: {name}</h2>
      <p className="text-white">Capital: {capital}</p>
      <img className="bg-cover" src={flag} alt="" />{" "}
    </div>
  );
}

export default CountryCard;
