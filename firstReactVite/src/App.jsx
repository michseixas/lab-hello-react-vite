import './App.css';
import Header from './components/Header.jsx'
import Sayhello from './components/Sayhello';
import Icons from './components/Icons';

function App() {
  return (
  <div>
    <Header />
    <Sayhello/>
    <Icons/>
    <div className="App">
    </div>
  </div>
  );
}

export default App;