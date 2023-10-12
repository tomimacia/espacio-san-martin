const destructureDate = (seconds: number) => {
  const date = new Date(seconds * 1000);
  const settedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  return settedDate;
};

export default destructureDate;
