
import React, { useEffect } from 'react'
import ReactDOM  from 'react-dom';

import {init} from './plugin'

export default function App() {
  useEffect(() => {
    if(document.getElementById('btn')) {
      init()
    }
  })
  return (
    <>
      <div style={{display:'flex'}}>
        <button id='btn'>btn</button>
        <div id='dialog'></div>
      </div>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('app'));



