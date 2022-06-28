import React from 'react'
import Calendar from './Calendar'
import Carousel from './Carousel'
import Counter from './Counter'
import Hero from './Hero'
import Images from './Images'
import Join from './Join'
import Welcome from './Welcome'
import styled from 'styled-components';

export default function Container() {
  return (
    <Cover>
        <Hero/>
        <Welcome/>
        <Calendar/>
        <Counter/>
        <Images/>
        <Carousel/>
        <Join/>
    </Cover>
  )
}


const Cover =styled.section`
  /* overflow-x:hidden ; */
`