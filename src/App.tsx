import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PengenalanJSX } from './course/PengenalanJSX'
import SingleRootElement from './course/SingleRootElement'
import DisplayData from './course/DisplayData'
import FunctionalComponent from './course/FunctionalComponent'
import PropsComponent from './course/PropsComponent'

function App() {
  return (
    <>
      <DisplayData />
      <PengenalanJSX />
      <SingleRootElement />
      <FunctionalComponent />
      <PropsComponent
      name='John Doe'
      age={30}
      isStudent={false} />
    </>
  );
}

export default App
