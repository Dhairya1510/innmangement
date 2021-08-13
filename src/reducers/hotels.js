// eslint-disable-next-line
export default (hotels = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return hotels;
    default:
      return hotels;
  }
};
