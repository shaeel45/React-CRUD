// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Add from './Add/Add';
import Edit from './Edit/Edit';


function App() {
  return (
    <Routes>
      <Route path="Add" element={<Add />} />
      <Route path="Edit" element={<Edit title="Edit Students Data"/>} />
    </Routes>
  );
}

export default App;
