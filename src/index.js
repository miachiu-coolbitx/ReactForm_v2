import React from 'react';
import ReactDOM from 'react-dom';
import './styles/content.scss';
import './styles/form.scss';
import Header from './Header';
import RegisterForm from './components/RegisterForm';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <RegisterForm />
  </React.StrictMode>,
  document.getElementById('root')
);
