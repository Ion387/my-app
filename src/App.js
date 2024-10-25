import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Content/Main';

 function App() {
  return (
    <BrowserRouter>

     <header >
      </header>
      <nav>Деплой</nav> 
      <Routes>
      <Route path="/" element={<Main/>}></Route>
      </Routes>
      <footer></footer>
      </BrowserRouter>  
  ); 
}
export default App;
