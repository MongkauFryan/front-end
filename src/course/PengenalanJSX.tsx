import React from 'react'

const PengenalanJSX = () =>{
  return (
    <div>
  <h1>Ini adalah PengenalanJSX</h1>
  <h1>Hello World!</h1>
  <p>U can do it.</p>
  </div>
  )
}
const PengenalanTanpaJSX = () => {
    return React.createElement(
        'h1',
        null,
        'hello world tanpa JSX'
    )

}
export {PengenalanJSX, PengenalanTanpaJSX}