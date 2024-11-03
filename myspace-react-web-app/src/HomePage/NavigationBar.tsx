import { Link } from "react-router-dom";


// make the logo icon (import it as a img)
export default function NavigationBar() {
  return (
    <div id="wd-makeSpace-navigation">
      logo
      <input type="text" placeholder="search" />
      <button> + </button>
      <div>
        <Link to="/MakeSpace/Inbox" id="wd-inbox-link"> Message Inbox </Link><br/>
        <Link to="/MakeSpace/Account" id="wd-account-link">First Last | Account</Link>
      </div>
    </div>
  );
}
