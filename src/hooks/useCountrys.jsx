import { useQuery } from "@tanstack/react-query";
import CountryService from "../service/app.service";
export const useCountrys = () => {
  return useQuery({
    queryKey: ["country"],
    queryFn: () => CountryService.getCountry(),
    select: ({ data }) => data,
  });
};
