import './App.css'; // css for app component and its descendants
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import HomePage from './pages/HomePage/HomePage';

// Functional Components with Named fn
function App() {
  // component must return JSX
  return (
    <div>
      <Header />

      <main className='mt-5 pt-3'>
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
