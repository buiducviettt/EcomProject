import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import 'normalize.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import file CSS của AOS

function App() {
  return (
    <Router >
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route key={index} path={route.path} element={
                <Page />
              } />
            )
          })}
        </Routes>
      </div>
    </Router>
  )

}

export default App
