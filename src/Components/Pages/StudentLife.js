import React from 'react';
import {   Switch, Route, Redirect,useLocation
} from 'react-router-dom';
import NotFound from '../../Components/NotFound';
import Inquire from './Inquire';
import stuLife from './Sub-pages/StudentLife/stuLife';
import Traditions from './Sub-pages/StudentLife/Traditions';
import Service from './Sub-pages/StudentLife/Service';
import Activities from './Sub-pages/StudentLife/Activities';
import Mentor from './Sub-pages/StudentLife/Mentor';
import Lunch from "./Sub-pages/StudentLife/Lunch";
import Safety from "./Sub-pages/StudentLife/Safety";


function StudentLife() {
  const location = useLocation();

  return (
    <>
      <Switch location={location} key={location.pathname}>
        <Route path={"/student_life"} exact>
          <Redirect to={"/student_life/life_in_lagoon"} />
        </Route>
        <Route path={"/student_life/life_in_lagoon"} component={stuLife} />
        <Route
          path={"/student_life/lagoon_traditions"}
          component={Traditions}
        />
        <Route path={"/student_life/service"} component={Service} />
        <Route path={"/student_life/activities"} component={Activities} />
        <Route path={"/student_life/mentorship"} component={Mentor} />
        <Route path={"/student_life/Lunch"} component={Lunch} />
        <Route path={"/student_life/Safety"} component={Safety} />

        <Route path="*" component={NotFound} />
      </Switch>
      <Inquire />
    </>
  );
}

export default StudentLife
