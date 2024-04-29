// App.js
import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: '20px' }}>
          {/* Your dashboard content goes here */}
          <h1>Welcome to Your Dashboard</h1>
          <p>This is where you can display various metrics, charts, and data.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
