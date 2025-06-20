import ShinyText from './components/ShinyText';

function App() {
  return (
    <div className="App" style={{ padding: '60px', fontSize: '2rem' }}>
      <h1>Welcome to My React Page</h1>
      <ShinyText text="This is shiny text from React!" speed={4} />
      <br />
      <ShinyText text="Disabled Shiny" disabled={true} />
    </div>
  );
}

export default App;
