import React from 'react';
import ReactGA from 'react-ga';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Nasa from './components/Nasa';
import { GA_TRACKING_ID } from './config';

ReactGA.initialize(GA_TRACKING_ID, []);

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/nasa" component={Nasa} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
