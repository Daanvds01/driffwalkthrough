import Chatdisplay from "./Chatdisplay";
import Chatmenu from "./Chatmenu";
import { Link } from "react-router-dom";
import Walkthrough from "./Walkthrough";

function Chat() {
  return (
    <div className="Chatwrapper">
      <Chatmenu />
      <Chatdisplay />
      <Walkthrough title="Chat" />
    </div>
  );
}

export default Chat;
