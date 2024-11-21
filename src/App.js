import './App.css';
import Theme2 from './components/Theme2';
import Home2 from './pages/Home2';
import Home from './pages/Home';
import Context from './context/Context';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Context>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/monopoly' element={<Home2 />} />
          </Routes>
        </Context>
      </Provider>
    </div>
  );
}

export default App;
