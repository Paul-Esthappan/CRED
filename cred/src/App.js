import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import View from './Pages/View/View';
import Create from './Pages/Create/Create';
import Edit from './Pages/Edit/Edit';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/view/:index' element={<View/>}/>        
          <Route path='/edit/:index' element={<Edit/>}/>
          <Route path='/create' element={<Create/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
