import React from 'react';
import {   Switch, Route, Redirect,useLocation
} from 'react-router-dom';
import NotFound from '../../Components/NotFound';
import Education from './Sub-pages/About/Education';
// import Welcome from './Sub-pages/About/Welcome';
import OpusDei from './Sub-pages/About/OpusDei';
import Message from './Sub-pages/About/Message';
import VirtualTour from './Sub-pages/About/VirtualTour';
import Parents from './Sub-pages/About/Parents';
import Inquire from './Inquire';
const Welcome = React.lazy(() => import('./Sub-pages/About/Welcome'))

function About() {
  const location = useLocation();
  return (
    <>
            <Switch location={location} key={location.pathname}>
                  <Route path={'/about'} exact >
                    <Redirect to={'/about/welcome-to-the-lagoon-school'}/>
                    </Route>
                    <Route  path="/about/welcome-to-the-lagoon-school"  >
                        <Welcome/>
                    </Route>
                    <Route  path="/about/education" component={Education }/>
                    <Route  path="/about/opus-dei" component={OpusDei }/>
                    <Route  path="/about/message-from-the-principal" component={Message }/>
                    <Route  path="/about/virtual-tour" component={VirtualTour }/>
                    <Route  path="/about/partnership-with-parents" component={Parents}/>

                  <Route path="*"  component={NotFound}/>
            </Switch>
        <Inquire/>
    </>
  )
}



export default About
