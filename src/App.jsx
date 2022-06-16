import React from 'react';
// import ReactDOM from 'react';

import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'

const App = () => {
    return (
        <>
            <Navbar />
            <Header className="bg-info" />
        </>        
    )
}

export default App