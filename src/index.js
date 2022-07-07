import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';

//router-dom
import { BrowserRouter } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import store from "./redux/store"
//portal
import {createPortal} from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));

export const ReactPortal = ({children}) => {
	return createPortal(children, document.getElementById('portal'))
}

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
