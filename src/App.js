import './App.css';
import {Routes,Route} from 'react-router-dom'
import NavScrollExample from './Composants/NavBar';
import Calc from './Composants/calcul';
import Home from './Composants/Home';
import Slider from './Composants/Slider/Slider ';
import Form from './Composants/Todo/Form';
import Api from './Composants/Api';
import Contenu from "./Composants/Contennu/Contenu";
import ToggleLangs from "./Composants/toogle/ToggleLangs";
import ContextProvider from "./Composants/Context/LangContext";

function App() {


  return (
    <div className="App">
      <div className='container-fluid'>
      <NavScrollExample /> 
      </div>
 
<Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Calc" element={<Calc/>} />
      <Route path="/Slider" element={<Slider/>} />
      <Route path="/Todo" element={<Form/>} />
      <Route path="/Api" element={<Api/>} />
      <Route path="/Langs" element={ <ContextProvider>
      <ToggleLangs />
      <Contenu />
      </ContextProvider>} />
      <Route path="*"  element={<h1>Not founnd 404</h1>} />
      

</Routes>

    </div>
  );
}

export default App;
