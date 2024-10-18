import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import 'normalize.css';
import './responsive.scss';
import ProtectedRoute from './routes/Protected Routes';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
          {privateRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<ProtectedRoute component={route.component} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
