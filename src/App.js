import React from 'react'
import MainPage from './pages/Main/mainPage';
import TitlePage from './pages/Title/titlePage';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App= () => {
  return (
        <Router>
            <div>
              {/* <nav>
                <ul>
                  <li>
                    <Link to="/">Title</Link>
                  </li>
                  <li>
                    <Link to="/main-page">Main</Link>
                  </li>

                </ul>
              </nav> */}

                <Routes>
                  <Route path="/" element={<TitlePage />} index />
                  <Route path="/main-page" element={<MainPage />} />
                </Routes>
            </div>
        </Router>
  )
}

export default App;