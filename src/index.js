import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import PreloaderApp from './components/Preloaders/PreloaderApp';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
// import App from './App';


const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback={ <PreloaderApp /> }>
   <App />
   </Suspense>,
  document.getElementById('root')
);


