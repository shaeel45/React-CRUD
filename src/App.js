import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Add from './Add/Add';

const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Add />} />
      </Routes>
    
  );
};

export default App;
