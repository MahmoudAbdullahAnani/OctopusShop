import { useRecoilState } from "recoil";
import { getProducts } from "../Data/AtomLang";
const SpinnerLoode = () => {
  const [prodacts, setProdacts] = useRecoilState(getProducts);
  prodacts ?     <div className="d-flex justify-content-center align-items-center position-absolute top-0 left-0 z-40 h-100  w-100 bg-slate-700">
      <div className="spinner-border text-gray-100" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div> : null;
};

export default SpinnerLoode;
