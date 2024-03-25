import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/header/header';
import { Provider } from 'react-redux';
import store from './store/store';
import LandingPage from './pages/landing-page/landing-page';
import SecondPage from './pages/second-page/second-page';
// proxyStore.ready().then(() => {
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<HeaderComponent />}>
          <Route index element={<LandingPage />} />
          <Route path='/second-page' element={<SecondPage />} />
        </Route>
      </Routes>
    </Router>
    ,
  </Provider>,
  document.getElementById('popup'),
);
