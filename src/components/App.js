import '../styles/App.css';
import LandingPage from './landing-page'
import Nav from './Nav';
import Search from './Search'

function App() {
  
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <Search />
    </div>
  );
}

export default App;
