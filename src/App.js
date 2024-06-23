import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import InputForm from './components/InputForm';
import Blance from './components/Blance';
import ExpenseList from './components/ExpenseList';
const App = () => {
  return (
    <Layout>
      <Blance />
      <InputForm />
      <ExpenseList />
    </Layout>
  );
};

export default App;
