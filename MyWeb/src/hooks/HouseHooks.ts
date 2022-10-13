import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import config from "../types/config";
import { House } from "../types/houses";
// import { useEffect, useState } from "react";

const useFetchHouses = () => {
  return useQuery<House[], AxiosError>("houses", () =>
    axios.get(`${config.baseApiUrl}/houses`).then((resp) => resp.data)
  );
  //   const [houses, setHouses] = useState<House[]>([]);
  //   useEffect(() => {
  //     const fetchHouses = async () => {
  //       const rsp = await fetch(`${config.baseApiUrl}/houses`);
  //       console.log(rsp);
  //       const houses = await rsp.json();
  //       setHouses(houses);
  //     };
  //     fetchHouses();
  //   }, []);
  //   return houses;
};
export default useFetchHouses;
