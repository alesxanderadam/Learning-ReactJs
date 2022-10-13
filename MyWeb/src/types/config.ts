const config = {
  baseApiUrl: "https://localhost:4000",
};
const currencyFormatter = Intl.NumberFormat("vnd", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
});

export default config;
export { currencyFormatter };
