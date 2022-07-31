import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//     <React.StrictMode>
//       <HashRouter>
//         <App />
//       </HashRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={ <App /> }>
          </Route>
        </Routes>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );