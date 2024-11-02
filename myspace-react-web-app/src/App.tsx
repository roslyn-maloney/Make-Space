import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import Account from './AccountPage/Account'; // Adjust the path as necessary


function App() {
  return (
    <Router>
      <Home/>
      <Routes>
        <Route path="/MakeSpace/Account" element={<Account />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
