import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Routing from './components/Routing';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles/theme';
import './styles/App.scss';
import '@fontsource/roboto';

import Header from './components/Header';
import Footer from './components/Footer';
import { getBgImgAsync } from './reducers/bgImgSlice';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBgImgAsync());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header />
                <Routing />
                <Footer />
            </Router>
        </ThemeProvider>
    );
}
