'use client';

import { useState } from "react";

export default function Home() {

  const [counter,setCounter] = useState<number>(0);
  const addValue= () =>{
    setCounter(counter+1);
  }
  return (
    <>
    <h1>hello world</h1>
    <h2>counter : {counter}</h2>
    <button onClick={addValue}> add counter</button>
    </>
  );
}
