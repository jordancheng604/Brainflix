import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/styles.css';
import './components/header/header.scss';
import './components/main/main-video/main-player/mainPlayer.scss';
import './components/main/main-video/comments/comments.scss';
import './components/main/side-video/SideVideo.scss';
import './components/main/main-video/description/Description.scss';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
