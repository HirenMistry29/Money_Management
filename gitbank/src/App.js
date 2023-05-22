import logo from './logo.svg';
import './App.css';
import DashBoard from './components/dashboard/dashboard';
import TransactionButton from './components/dashboard/button';
import { Component } from 'react';


class App extends Component {
  render() {
    return (
    <div className="App">
      <DashBoard name="Hiren"/>
      <TransactionButton />
    </div>
  );
}
}

export default App;
