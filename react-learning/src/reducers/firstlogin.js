const firstloginReducer = (state = false, action) => {
  switch (action.type) {
    case "FIRST_TIME":
      return !state;
    default:
      return state;
  }
};

export default firstloginReducer;
