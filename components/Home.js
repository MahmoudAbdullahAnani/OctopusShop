import { useRouter } from "next/router";
import Galrye from "./Handeling/HandelProdectHome";
import HomeCont from "./Handeling/HomeContent";

const ProdctdefaultHome = () => {
  const router = useRouter();
  return (
    <fragment>
      <Galrye />
      <HomeCont />
    </fragment>
  );
};

export default ProdctdefaultHome;
