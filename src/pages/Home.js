import React from 'react'
import {Ourteam} from "../sections/Ourteam"
import Counter from '../sections/Counter'
import Quickconnect from '../sections/Quickconnect'



export default function Home() {

  return (
    <>
    <div className="wraper">
      
      <Ourteam/>
      <section id="counter" className="index-3 gray_bg">
      <Counter/>
      </section>
      <Quickconnect/>
      
    
    </div>
    </>
  );
}