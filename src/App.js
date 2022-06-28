import React,{useState,useEffect,Suspense}
// ,{Suspense} 
 from 'react';
import { Route,Switch
 } from 'react-router-dom';
 import NotFound from './Components/NotFound';
import NavBar from './Components/Nabar';
// import Home from './Components/Container';
import Footer from './Components/Footer';
// import About from './Components/Pages/About';
import Academics from './Components/Pages/Academics';
import Admission from './Components/Pages/Admission';
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";
import StudentLife from './Components/Pages/StudentLife';
// import stuLife from './Components/Pages/Sub-pages/StudentLife/stuLife';
// import Loader from './Components/Loader';
const About = React.lazy(() => import('./Components/Pages/About'))
const Home = React.lazy(() => import('./Components/Container'))


const override = css`
    display: flex;
    /* flex-direction: column; */
    width: 100%;
    height: 100%;
    justify-content:center ;
    text-align:center ;
    align-items:center ;
    margin: 0 auto;
    position:fixed ;
    /* top:0 ; */
    /* left:0 ; */
    right:-50% ;
    bottom:-40% ;
`;

function App() {
  const [loading, setLoading] = useState(false)
  

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000);
  },[])

  
  return (
    <>
      {loading ? (
        <PuffLoader color={"red"} loading={loading} css={override} size={150} />
      ) : (
        <Suspense>
          <NavBar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/about"} component={About} />
            <Route path={"/academics"} component={Academics} />
            <Route path={"/admission"} component={Admission} />
            <Route path={"/student_life"} component={StudentLife} />

            <Route to="*" component={NotFound} />
          </Switch>
          
          <Footer />
        </Suspense>
      )}
    </>
  );
}

export default App;
