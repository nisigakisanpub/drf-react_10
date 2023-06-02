import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Page01 from './page01';
import Page02 from './page02';

export const MyContext = React.createContext();
const initialVal={
  counter1:0,
  csrftoken:"",
}

function App() {
  const [contextVal, setContextVal] = React.useState(initialVal);

  return (
    <div className="App">
        <MyContext.Provider value={{ contextVal, setContextVal }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page01 />} />
          <Route path="/page01" element={<Page01 />} />
          <Route path="/page02" element={<Page02 />} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
