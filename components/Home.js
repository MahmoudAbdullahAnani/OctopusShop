import Galrye from "./Handeling/Galrye";
import CardHome from "../components/Handeling/Card";
import { userSign } from "../Data/AtomLang";
import { useRecoilState } from "recoil";
const ProdctdefaultHome = () => {
    const [userSignIn, setUserSign] = useRecoilState(userSign);
// console.log(userSignIn);
  /*
  toast.info('🦄 Wow so easy!', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
});
  */
  return (
    <>
      <Galrye />
      <CardHome />
    </>
  );
};

export default ProdctdefaultHome;
