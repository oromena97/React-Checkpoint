import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Forms from './Form';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      
    <div className='form-container'>
    <Forms/>
    </div>
    
  </React.StrictMode>
);


reportWebVitals();
