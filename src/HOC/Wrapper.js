import React from 'react';
import Navigation from './../Components/TopNavigation/Navigation';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import BodyGrid from '../Components/Body/BodyGrid';
import FreeNowPage from './FreeNowPage';
import ShareNowPage from './ShareNowPage';
import ChargeNowPage from './ChargeNowPage';
import ReachNowPage from './ReachNowPage';
import ParkNowPage from './ParkNowPage';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    "palette": {
        "common": { "black": "#000", "white": "#fff" },
        "background": { "paper": "#fff", "default": "#fafafa" },
        "primary": { "light": "rgba(11, 161, 226, 1)", "main": "rgba(0, 84, 120, 1)", "dark": "rgba(200, 71, 42, 1)", "contrastText": "#fff" },
        "secondary": { "light": "rgba(149, 192, 61, 1)", "main": "rgba(102, 189, 185, 1)", "dark": "rgba(220, 162, 48, 1)", "contrastText": "#fff" },
        "error": { "light": "#e57373", "main": "#f44336", "dark": "#d32f2f", "contrastText": "#fff" },
        "text": { "primary": "rgba(0, 0, 0, 0.87)", "secondary": "rgba(0, 0, 0, 1)", "disabled": "rgba(0, 0, 0, 0.38)", "hint": "rgba(0, 0, 0, 0.38)" }
    }
});

function BodyGridRoute() {
    return <BodyGrid/>;
  }
  
  function FreeNowPageRoute() {
    return <FreeNowPage/>;
  }

  function ShareNowPageRoute() {
    return <ShareNowPage/>;
  }

  function ChargeNowPageRoute() {
    return <ChargeNowPage/>;
  }

  function ReachNowPageRoute() {
    return <ReachNowPage/>;
  }

  function ParkNowPageRoute() {
    return <ParkNowPage/>;
  }


function Wrapper() {

    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <div>
                    <Navigation />
                </div>
                <div>

                    <Route path="/" exact component={BodyGridRoute} />
                    <Route path="/free/" component={FreeNowPageRoute} />
                    <Route path="/share/" component={ShareNowPageRoute} />
                    <Route path="/charge/" component={ChargeNowPageRoute} />
                    <Route path="/reach/" component={ReachNowPageRoute} />
                    <Route path="/park/" component={ParkNowPageRoute} />
                    

                </div>
            </MuiThemeProvider>
        </Router>
    )
}

export default Wrapper;
