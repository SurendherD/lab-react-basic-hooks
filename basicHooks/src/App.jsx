import React from "react";
import UseState from "./Components/UseState";
import MultipleUseState from "./Components/multipleUseState";
import UseStatewithObj from "./Components/UseStatewithObj";
import StatefromFunction from "./Components/StatefromFunction";
import UseEffect from "./Components/UseEffect";
import Cont from "./Components/Cont";
import './App.css'

export default function App() {
  return (
    <div>
      <UseState/>
      <hr />
      <MultipleUseState/>
      <hr />
      <UseStatewithObj/>
      <hr />
      <StatefromFunction />
      <hr />
      <UseEffect />
      <hr />
      <Cont />
    </div>
  )
}
