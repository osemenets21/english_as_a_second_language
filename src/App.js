import Header from './components/Header';
import HomePage from './components/HomePage'; 
import Navbar from './components/Navbar';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <HomePage />
    </div>
  );
}

export default App;