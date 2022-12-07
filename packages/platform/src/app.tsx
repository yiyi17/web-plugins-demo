import ReactDOM, { createPortal } from 'react-dom';
import React, { useEffect, useRef, useState } from 'react';
// import { memorizedFetchBundle } from 'lite-module-federation';
import { memorizedFetchBundle } from '../../lite-module-federation/src';


import './app.css';

const Dialog:React.FC<{}> = (props) => {
  return  createPortal(<>app Dialog</>, document.querySelector('#portal') as HTMLElement)
}

const App: React.FC<any> = () => {
  const [plugins, setPlugins] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const btnRef = useRef(null)

  useEffect(() => {
    setTimeout(async () => {
      // 加载插件
      const  plugins  = await memorizedFetchBundle(
        'http://localhost:7001/cdn/remoteEntry.js'
      );
      setPlugins(plugins);
      setLoading(false);

      // 执行插件
      plugins.init()

    }, 1000);
  }, []);


  if (loading) {
    return <div>Loading sub-app.....</div>;
  }


  return (
    <div className="main-box">
      <div className="main-app">Main App</div>
      <div ref={btnRef} id='btn'>2233423</div>
      <div className="sub-app-wrapper">
      </div>
      <div id='dialog'></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
