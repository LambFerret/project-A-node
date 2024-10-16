import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Route';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthProvider } from './components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Header />
          <div className="container">
            <br />
            <br />
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;