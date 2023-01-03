import { useRouter } from "next/router";
import Example2 from "./Handeling/Card";
import Galrye from "./Handeling/Galrye";

const ProdctdefaultHome = () => {
  const router = useRouter();
  return (
    <fragment>
      <Galrye />
      <Example2/>
    </fragment>
  );
};

export default ProdctdefaultHome;
