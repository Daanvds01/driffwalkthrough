
import { Link } from "react-router-dom";

const Header = (props) => {
  const navStyle = {
    color: "black",
  };
  return (
    <header>
      <div className="leftheader">
        <h1>{props.title}</h1>
      </div>
      <div className="rightheader">
        <h2>The Office</h2>
        <div className="headerrighttitems">
          <Link style={navStyle} to="/Dashboard">
            <ul>Dashboard</ul>
          </Link>
          <Link style={navStyle} to="/Chat">
            <ul>Chat</ul>
          </Link>
          <ul>Posts</ul>
          <ul>Reminders</ul>
          <ul>Files</ul>
          <ul>People</ul>
          <Link style={navStyle} to="/Datadisplay">
            <ul>Popup Data</ul>
          </Link>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Logo",
};

export default Header;
