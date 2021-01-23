import React, { Component, useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import axios from 'axios';
import Pagination from './components/layout/Pagination';

class App extends Component {
    render() {
        return (
            <div className ="App">
                <NavBar/><div className="container"><Dashboard></Dashboard></div>/div>
            </div>
        );
    }
}

export default App