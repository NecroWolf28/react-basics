import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Student from "./Student";
import Login from "./Login";
import LoginSuccessful from "./LoginSuccessful";
import {Header} from "./Header";

function App() {
  return (
    <div className="App">
        <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <BrowserRouter>
              <Routes>
                  {/* routing configuration for home,about,contact */}
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/student" element={<Student />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/success" element={<LoginSuccessful />} />
              </Routes>
          </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
