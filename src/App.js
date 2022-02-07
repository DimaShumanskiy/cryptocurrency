import './App.css';
import {Route, NavLink, Routes} from "react-router-dom";
import {Layout, Typography, Space} from 'antd'

import {
    Navbar,
    Homepage,
    Exchanges,
    Cryptocurrencies,
    CryptoDetails,
    News
} from './components'
import React from "react";

function App() {
    return (
        <div className="app">
            <header className="navbar">
                <Navbar/>
            </header>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path={'/'} element={<Homepage/>}/>
                            <Route exact path={'/exchanges'} element={<Exchanges/>}/>
                            <Route exact path={'/cryptocurrencies'}
                                   element={<Cryptocurrencies/>}/>
                            <Route exact path={'/crypto/:coinId'}
                                   element={<CryptoDetails/>}/>
                            <Route exact path={'/news'} element={<News/>}/>
                        </Routes>
                    </div>
                </Layout>

                <footer className="footer">
                    <Typography.Title level={5}
                                      style={{color: 'white', textAlign: 'center'}}>
                        Cryptoverse <br/>
                        All rights reserverd
                    </Typography.Title>
                    <Space>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/exchanges'}>Exchanges</NavLink>
                        <NavLink to={'/news'}>News</NavLink>
                    </Space>
                </footer>
            </div>
        </div>
    );
}

export default App;
