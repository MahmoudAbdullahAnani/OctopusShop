import { atom } from "recoil";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
const getProducts = atom({
  key: "getProducts", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
const getDisc = atom({
  key: "getDisc", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
const userSign = atom({
  key: "userSign", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
const scurityCard = atom({
  key: "scurityCard", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
const countCartRec = atom({
  key: "countCartRec", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
const priceAll = atom({
  key: "priceAll", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
export {
  textState,
  getProducts,
  getDisc,
  userSign,
  scurityCard,
  countCartRec,
  priceAll,
}; 
