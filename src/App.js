
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Headers/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Pages/Home';
import About from './component/Pages/About';




function App() {


  return (
     
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>


  </Routes>
  </BrowserRouter>
  
  
  </>
     
  
    
  );
}

export default App;



