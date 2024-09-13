import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoGame from "./component/VideoGame";
import Details from "./component/Details";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main VideoGame component */}
         <Route path="/" element={<VideoGame />} />

        {/* Detgit commit -m "first commit"ails component to display game details */}
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
