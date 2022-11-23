import React from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import "./App.css";
import Navbar from './components/Navbar';
import { Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails} from './components';
import "antd/dist/antd.min.css";

const App = () => {
    return (
        <div className = "app">
            <div className = "navbar">
                <Navbar/>
            </div>
            <div className = "main">
                <Layout>
                    <div className = 'routes'>
                        <Routes>
                            <Route path = '/' element = {<Homepage/>}/>
                            <Route path = '/exchanges' element = {<Exchanges/>}/>
                            <Route path = '/cryptocurrencies' element = {<Cryptocurrencies/>}/>
                            <Route path = '/crypto/:coinId' element = {<CryptoDetails/>}/>
                            <Route path = '/news' element = {<News/>}/>
                        </Routes> 
                    </div>
                </Layout>
            </div>
            <div className = "footer" style={{backgroundColor : 'black'}}>
                <Typography.Title level={5} style={{color : 'white', textAlign : 'center', height: '100px', paddingTop:'40px'}}>
                © 2022 Copyright: Kryptovest
                </Typography.Title>
            </div>
        </div>
    )
}

export default App
