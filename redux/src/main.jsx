import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import { legacy_createStore as createStore} from "redux"
import reducer from './Component/Reducer.jsx'

const store = createStore(reducer)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  
)
