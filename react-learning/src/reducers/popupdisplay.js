const popupdisplay = (state = "", action) => {
  switch (action.type) {
    case "POPUP_1":
      return "Popup1";
    case "POPUP_2":
      return "Popup2";
    default:
      return state;
  }
};
export default popupdisplay;
