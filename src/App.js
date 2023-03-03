import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import GenerateCalendar from "./pages/GenerateCalendar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/generate-calendar" element={<GenerateCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;
