const formatCarruns = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const FormaterPrice = (num) => {
  return formatCarruns.format(num);
};

export default FormaterPrice;
