import { Link } from "react-router-dom";

// make the logo icon (import it as a img)
export default function NavigationBar() {
  return (
    <div id="wd-kanbas-navigation">
      logo
      <input type="text" placeholder="search" />
      <Link to="/MakeSpace/Adding" id="wd-adding-link">Adding Listing</Link><br />\
      <Link to="/MakeSpace/Inbox" id="wd-inbox-link">Inbox</Link><br />\
      <Link to="/MakeSpace/Account" id="wd-account-link">Account</Link><br />
    </div>
  );
}
