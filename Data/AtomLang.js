import { atom } from "recoil";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
const getProducts = atom({
  key: "getProducts", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
export { textState, getProducts }; 
