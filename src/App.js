// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Add from './Add/Add';
import Edit from './Edit/Edit';


function App() {
  return (
    <Routes>
      <Route path="" element={<Add />} />
      <Route path="/Edit/:id" element={<Edit title="Edit Students Data"/>} />
    </Routes>
  );
}

export default App;
