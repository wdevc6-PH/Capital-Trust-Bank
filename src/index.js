import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'animate.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import App from './App';
import AuthProvider from './context/AuthProvider';
import './index.css';
import store from './redux/store/store';
// import { getTodos, postTodo } from '../my-api';

import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
           <Provider store={store}>
            <App />
           </Provider>
        </QueryClientProvider>
        <Toaster />
      </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
