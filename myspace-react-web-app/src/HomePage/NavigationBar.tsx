import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div id="wd-makeSpace-navigation">
      logo
      <input type="text" placeholder="search" />
      <div>
        <Link to="/MakeSpace/Account" id="wd-account-link">Account</Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
}
