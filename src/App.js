import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
