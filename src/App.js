import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import Navigation from './components/Navigation';
import Landingpage from './components/Landingpage';
import Footer from './components/Footer';

import './styles/App.css';

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <div className='App'>
                    <Navigation />

                    <Switch>
                        <Route path='/David-Popescu-Website' component={Landingpage} />
                    </Switch>

                    <Footer />
                </div>
            </ScrollToTop>
        </Router>
    );
};

export default App;
