export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const gettext = () => {
  return {
    type: "GET_TEXT",
  };
};
export const popupactive = () => {
  return {
    type: "ACTIVATION"
  }
}
export const popupnonactive = () => {
  return {
    type: "NONACTIVE"
  }
}
