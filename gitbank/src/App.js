import logo from './logo.svg';
import './App.css';
import DashBoard from './components/dashboard/dashboard';
import TransactionButton from './components/dashboard/button';
import EventBinding from './components/Tutorials/eventbinding/eventbinding';
import Parent from './components/Tutorials/eventbinding/Parent';
import { Component } from 'react';
import Arrays from './components/Tutorials/Array/Arrays';
import Form from './components/Tutorials/Form/form'


class App extends Component {
  render() {
    return (
    <div className="App Header-Allign card container">
      <DashBoard/>
      {/* <TransactionButton /> */}
      {/* <EventBinding/>
      <Parent/>
      <Arrays/> */}

      <div >
         <Form/>
      </div>

    </div>
  );
}
}

export default App;
