import { useParams } from "react-router-dom";
import CountryService from "../service/app.service";
import { useEffect, useState } from "react";
function Country() {
  const { name } = useParams();
  const [countryData, setCountryData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    CountryService.getByID(name)
      .then((res) => {
        setCountryData(...res.data);
      })
      .finally(() => {
        setIsLoading(true);
      });
  }, [name]);
  console.log(countryData);
  return (
    isLoading && (
      <>
        <div className="w-full relative  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  overflow-hidden text-center text-2xl text-black-black-8 font-web-caption">
          <div className="self-stretch flex-1 rounded-2xl flex flex-col items-start justify-center p-8 gap-[24px]">
            <div className="flex flex-col items-start justify-start gap-[16px] font-web-h1">
              <div className="relative leading-[76px] font-light text-white">
                {countryData.name.common}
              </div>
              <div className="flex flex-row items-center justify-center gap-[16px] text-lg font-web-caption">
                <div className="shadow-[0px_1px_2px_rgba(33,_37,_41,_0.08)] rounded-2xl bg-black-black-0 flex flex-row items-center justify-center py-1 px-3 gap-[4px]">
                  <img
                    className="w-4 relative rounded-lg h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/minussmall.svg"
                  />
                  <div className="relative leading-[24px] text-white">
                    area: {countryData.area}
                  </div>
                </div>
                <div className="shadow-[0px_1px_2px_rgba(33,_37,_41,_0.08)] rounded-2xl bg-black-black-0 flex flex-row items-center justify-center py-1 px-3 gap-[4px]">
                  <img
                    className="w-4 relative rounded-lg h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/minussmall.svg"
                  />
                  <div className="relative leading-[24px] text-white">
                    continents: {countryData.continents}
                  </div>
                </div>
                <div className="shadow-[0px_1px_2px_rgba(33,_37,_41,_0.08)] rounded-2xl bg-black-black-0 flex flex-row items-center justify-center py-1 px-3 gap-[4px]">
                  <img
                    className="w-4 relative rounded-lg h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/minussmall.svg"
                  />
                  <div className="relative leading-[24px] text-white">
                    capital: {countryData.capital}
                  </div>
                </div>
                <div className="shadow-[0px_1px_2px_rgba(33,_37,_41,_0.08)] rounded-2xl bg-black-black-0 flex flex-row items-center justify-center py-1 px-3 gap-[4px]">
                  <img
                    className="w-4 relative rounded-lg h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/minussmall.svg"
                  />
                  <div className="relative leading-[24px] text-white">
                    official: {countryData.name.official}
                  </div>
                </div>
              </div>
            </div>
            <img src={countryData.flags.png} className="w-62 h-52 text-white" />
          </div>
        </div>

        <div className="self-stretch rounded-lg overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-black-black-5">
          <div className="self-stretch h-11 overflow-hidden shrink-0 flex flex-row items-start justify-start">
            <div className="self-stretch w-40 bg-black-black-0 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-black-black-5 border-l-[1px]">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                <div className="relative leading-[24px]">timezones</div>
              </div>
            </div>
            <div className="self-stretch  bg-black-black-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-black-black-5 border-l-[1px]">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                <div className="relative leading-[24px]">
                  {countryData.timezones}
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-11 overflow-hidden shrink-0 flex flex-row items-start justify-start">
            <div className="self-stretch w-40 bg-black-black-0 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-black-black-5 border-l-[1px]">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                <div className="flex-1 relative leading-[24px]">population</div>
              </div>
            </div>
            <div className="self-stretch flex-1 bg-black-black-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-black-black-5 border-l-[1px]">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                <div className="flex-1 relative leading-[24px]">
                  {countryData.population}
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-11 overflow-hidden shrink-0 flex flex-row items-start justify-start">
            <div className="self-stretch w-40 bg-black-black-0 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-black-black-5 border-l-[1px]">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                <div className="flex-1 relative leading-[24px]">region</div>
              </div>
            </div>
            <div className="self-stretch flex-1 bg-black-black-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-black-black-5 border-l-[1px]">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                <div className="flex-1 relative leading-[24px]">
                  {countryData.region}
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-11 overflow-hidden shrink-0 flex flex-row items-start justify-start">
            <div className="self-stretch w-40 bg-black-black-0 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-black-black-5 border-l-[1px]">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                <div className="flex-1 relative leading-[24px]">
                  startOfWeek
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 bg-black-black-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-black-black-5 border-l-[1px]">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                <div className="flex-1 relative leading-[24px]">
                  {countryData.startOfWeek}
                </div>
              </div>
            </div>
          </div>
          <div className="h-11 overflow-hidden  flex flex-row items-start justify-start">
            <div className="w-40 bg-black-black-0 box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-black-black-5 border-l-[1px]">
              <div className="overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                <div className="flex-1 relative leading-[24px]">subregion</div>
              </div>
            </div>
            <div className="flex-1 bg-black-black-0 flex flex-col items-start justify-start border-t-[1px] border-solid border-black-black-5 border-l-[1px]">
              <div className="overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                <div className="flex-1 relative leading-[24px]">
                  {countryData.subregion}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Country;
