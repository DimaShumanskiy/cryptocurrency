import './App.css';
import {Route,Link,Routes} from 'react-router-dom'
import { Layout,Typography, Space} from 'antd'

import {Navbar} from './components'

function App() {
  return (
    <div className="app">
        <header className="navbar">
            <Navbar/>
        </header>
        <div className="main">

        </div>
        <footer className="footer">

        </footer>
    </div>
  );
}

export default App;
