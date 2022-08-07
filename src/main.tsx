import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'antd/dist/antd.css';
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
     <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
