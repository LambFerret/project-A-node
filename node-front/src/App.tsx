
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Route';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <br />
          <br />
        <AppRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;