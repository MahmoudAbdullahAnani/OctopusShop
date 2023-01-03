import { useRouter } from "next/router";
import Galrye from "./Handeling/Galrye";
import CardHome from '../components/Handeling/Card'
const ProdctdefaultHome = () => {
  const router = useRouter();
  return (
    <fragment>
      <Galrye />
      <CardHome/>
    </fragment>
  );
};

export default ProdctdefaultHome;
