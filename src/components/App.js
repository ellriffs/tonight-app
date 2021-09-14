import '../styles/App.css'
import EventCard from './EventCard'
import LandingPage from './landing-page'
import Nav from './Nav'
import getEvent from './EventCard'



function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage onSubmit = {getEvent} />
      <EventCard />
      
    </div>
  );
}

export default App;
