import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
