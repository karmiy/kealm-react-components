import React from 'react';
import {HashRouter, BrowserRouter } from 'react-router-dom';
import { RouterView } from '@/components'

const Router = process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter;

function App() {
    return (
        <Router>
            <RouterView />
        </Router>
    )
}

export default App;