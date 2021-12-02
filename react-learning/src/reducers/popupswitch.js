const popupswitch = (state = false, action) => {
    switch (action.type) {
      case "SWITCH_POP":
        return !state; 
      default:
        return state;
    }
  };

  
  export default popupswitch;
  