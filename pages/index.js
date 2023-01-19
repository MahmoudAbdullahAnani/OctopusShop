import { useEffect, useState } from "react";
import LodingDataHome from "../components/Handeling/LodingDataHome";
import ProdctdefaultHome from "../components/Home";
const Home = () => {
  const [timeLoding, setTimeLoding] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTimeLoding(false);
    }, 4000);
  },[])
  return <>{timeLoding ? <LodingDataHome /> : <ProdctdefaultHome />}</>;
};

export default Home;
