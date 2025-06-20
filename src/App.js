import React from 'react';
import ShinyText from './components/ShinyText';

function App() {
  return (
    <div className="App" style={{ padding: '50px', fontSize: '2rem' }}>
      <ShinyText text="Just some shiny text!" speed={3} className="custom-class" />
      <br />
      <ShinyText text="Disabled shiny text" disabled={true} />
    </div>
  );
}

export default App;
