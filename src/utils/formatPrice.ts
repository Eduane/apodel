export const formatPrice = (num: number) => {
    let formatedNumber;
    if (num % 1 !== 0) {
      formatedNumber = num?.toFixed(2);
    } else {
      formatedNumber = num?.toFixed(0);
    }
    return Number(formatedNumber);
  };
  