import { Link } from "react-router-dom";
import './HomePage.css';

// make the logo icon (import it as a img)
export default function NavigationBar() {
  return (
    <nav className="grid">
      <Link to="/MakeSpace/App" className="navtext"><img className="logo" src="/Assets/Component1.svg" alt="logo"/></Link>
      <input type="text" placeholder="search" />
      <Link to="/MakeSpace/Adding" className = "navtext">Add Listing</Link>
      <Link to="/MakeSpace/Inbox" className = "navtext">Messages</Link>
      <p>Name Placeholder</p>
      <img className="pfp" src="/Assets/Ellipse3.svg" alt="pfp"/>
    </nav>
  );
}
