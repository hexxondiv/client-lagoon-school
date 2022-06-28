
import React from 'react';
import {   Switch, Route, Redirect,useLocation
} from 'react-router-dom';
import NotFound from '../../Components/NotFound';
import Inquire from './Inquire';
import Applyto from './Sub-pages/Admission/Applyto';
import Frequent from './Sub-pages/Admission/Frequent';
import Proceedure from './Sub-pages/Admission/Proceedure';
import Scholarship from './Sub-pages/Admission/Scholarship';
import Tuition from './Sub-pages/Admission/Tuition';

function Admission() {
  const location = useLocation();
  return (
            <>
            <Switch location={location} key={location.pathname}>
                  <Route path={'/admission'} exact >
                    <Redirect to={'/admission/admission-proceedure'}/>
                    </Route>
                    <Route  path="/admission/admission-proceedure"  >
                      <Proceedure/>
                    </Route>
                    <Route  path="/admission/apply-to-lagoon" component={Applyto }/>
                    <Route  path="/admission/f-a-q" component={Frequent}/>
                    <Route  path="/admission/scholarship" component={Scholarship }/>
                    <Route  path="/admission/tuition" component={Tuition}/>
                  <Route path="*"  component={NotFound}/>
            </Switch>

            <Inquire/>
            
            </>

  )
}



export default Admission
