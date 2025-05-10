import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element = {<HomePage />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
