import logo from './logo.svg';
import './App.css';
 import { HashRouter, Route, Routes } from 'react-router-dom'; 
import Main from './Components/Content/Main';

 function App() {
  return (
    <HashRouter>
    <div>
Деплооой!
     <header >
      </header>
      <nav>Деплой</nav> 
      <Routes>
      <Route path="/" element={<Main/>}></Route>
      </Routes> 
      <footer>23423423</footer>
      </div>  
      </HashRouter>
  ); 
}
export default App;
