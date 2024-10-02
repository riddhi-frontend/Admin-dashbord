import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Todo from './Todo';
import Profile from './Profile';
import Login from './Login';
import Logout from './Logout';
import Setting from './Setting';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<App />}></Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/todo" component={Todo} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/setting" component={Setting} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
