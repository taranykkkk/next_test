const calcPrice = (count, price) => {
  if (price === 0 || price === undefined) return null;
  return (count * price) / 100;
};

export default calcPrice;
