import './App.css'
import { Navbar, HomePage, AboutUs } from './components/Home';

function App() {
 

  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home-page">
          <HomePage />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
      </main>
    </div>
  )
}

export default App
