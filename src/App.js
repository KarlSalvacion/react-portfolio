import './App.css';
import NavBar from "./navbar";
import Introduction from './introduction';
import Projects from './projects';
import ContactMe from './contactme';

function App() {
  return (
    
    <div className="App">

      <NavBar/>
      <Introduction/>
      <Projects/>
      <ContactMe/>

    </div>
  );
}

export default App;
