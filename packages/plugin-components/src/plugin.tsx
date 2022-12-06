import React from 'react';
import ReactDOM from 'react-dom';
import './demo.css';

// TODO: 使用 antd
const Dialog:React.FC<{}> = () => {
  return  <>Plugin Dialog</>
}

const init = () => {
  const btn = document.getElementById('btn')
  btn?.addEventListener('click', () => {
    // 直接 render 到目标元素
    ReactDOM.render(<Dialog/>, document.querySelector('#dialog'))
  })
}

export {
  init
};


