import './App.css';
import Theme2 from './components/Theme2';
import Home2 from './pages/Home2';
import Context from './context/Context';

function App() {
  return (
    <div className="App">
      <Context>
        <Home2 />
        {/* <Theme2 /> */}
      </Context>
    </div>
  );
}

export default App;
