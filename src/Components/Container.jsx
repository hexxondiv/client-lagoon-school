import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import Calendar from './Calendar'
import Carousel from './Carousel'
import Counter from './Counter'
import Hero from './Hero'
import Images from './Images'
import Join from './Join'
import Welcome from './Welcome'
import {api} from "../misc/api";
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Container() {
  const [settings, setSettings] = useState('');
  const fetchSiteSettings = () => {
    api
      .get("site-settings")
      .then((res) => {
        const abridgeSettings = res.data;
        setSettings(abridgeSettings);
      })
      .catch(console.log);
  };
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 120,
    });
    fetchSiteSettings();
  }, []);
  return (
    <Cover>
        <Hero/>
        <Welcome/>
        <Calendar/>
        <Counter statistics_average_class_size={settings?.statistics_average_class_size}
  statistics_enrolment={settings?.statistics_enrolment}
  statistics_graduates={settings?.statistics_graduates}
  statistics_student_mentor_ratio={settings?.statistics_student_mentor_ratio}
  statistics_parent_partnership={settings?.statistics_parent_partnership}
  statistics_faith={settings?.statistics_faith}
  statistics_academic_excellence={settings?.statistics_academic_excellence}
  />
        <Images/>
        <Carousel/>
        <Join/>
    </Cover>
  )
}


const Cover =styled.section`
  /* overflow-x:hidden ; */
`