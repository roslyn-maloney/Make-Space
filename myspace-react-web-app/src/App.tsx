import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Constants from './HomePage';
import Account from './AccountPage/Account'; 
import Inbox from './InboxPage/Inbox';
import './App.css';


function App() {
  return (
    <body>
    <Router>
      <Constants/>
      <Routes>
        <Route path="/MakeSpace/Account" element={<Account />} />
        <Route path="/MakeSpace/Inbox" element={<Inbox/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
    </body>
  );
}

export default App;