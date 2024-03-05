import React from 'react';
import './style/Appcomp.css';
import DynamicDisplay from './companents/DynamicDisplay';
const App = () => {
  return (
    <div>
      <h1>Dynamic card display</h1>

      <DynamicDisplay/>
    </div>
  );
};

export default App;