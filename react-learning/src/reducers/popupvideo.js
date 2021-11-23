const popupvideo = (state = false, action) => {
    switch (action.type) {
      case "ACTIVATION":
        return !state; 
      default:
        return state;
    }
  };

  
  export default popupvideo;
  