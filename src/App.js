
import './css/App.css';
import {
  Route,
  Routes,
} from "react-router-dom"
import Menu from './components/Menu';
import Complete from './components/Complete';
import Wishlist from './components/Wishlist';

function App() {
  return (
      <div className="Container">
        <div className='Menu-box'>
          <Menu />
        </div>
        <div className='Content-box'>
            <Routes>
                <Route path='/' element={<Complete/>} />
                <Route path='/complete' element={<Complete/>} />
                <Route path='/wishlist' element={<Wishlist/>} />
            </Routes>
        </div>
      </div>
    
  );
}

export default App;
