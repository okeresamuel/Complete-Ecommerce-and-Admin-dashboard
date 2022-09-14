import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import Button from './components/Button/Button';

import './App.css';

function App() {
  return (
    <div id="app">
      <Logo />
      <Header />
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
