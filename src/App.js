import './App.css';
import About from './components/about/about.jsx';
import Contact from './components/contact/contact.jsx';
import SlideNav from './components/slidenav/slidenav.jsx';
import Projects from './components/projects/projects.jsx';

function App() {
  return (
    <div>
      <div>
        <SlideNav />
      </div>
      <div>
        <About />
        <Projects />
        <Contact />
      </div>


    </div>
  );
}

export default App;
