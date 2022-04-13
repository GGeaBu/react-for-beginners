import React from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <App />,
);
